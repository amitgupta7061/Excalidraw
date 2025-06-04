import express from "express";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = require('@repo/backend-common/config');
import { middleware } from "./middleware";
const { CreateUserSchema, SigninSchema, CreateRoomSchema } = require("@repo/common/types");
const { prismaClient } = require("@repo/db/client");
import cors from "cors";
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json());
app.use(cors())

app.post("/signup", async (req, res) => {
    const parsed = CreateUserSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({
            message: "Invalid input",
            errors: parsed.error.flatten()
        });
        return;
    }

    const { username, name, password } = parsed.data;

    try {
        const hashed_password = await bcrypt.hash(password, 10);
        const newUser = await prismaClient.user.create({
            data: {
                email: username,
                password: hashed_password,
                name: name
            }
        })
        res.json({
            message: "User created successfully",
            userId: newUser.id
        })
    } catch(e) {
        res.status(411).json({
            message: "User already exists with this email",
        })
    }
})

app.post("/signin", async (req, res) => {
    const parsed = SigninSchema.safeParse(req.body);
    if (!parsed.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    const {username, password} = parsed.data;

    try {
        const user = await prismaClient.user.findUnique({
            where: { email: username }
        });

        if (!user) {
            res.status(403).json({ message: "Invalid email or password" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(403).json({ message: "Invalid email or password" });
            return;
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" })
        res.status(200).json({ token });
    } catch (error) {
        console.error("Signin error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

app.post("/room", middleware, async (req, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    // @ts-ignore: TODO: Fix this
    const userId = req.userId;

    try {
        const room = await prismaClient.room.create({
            data: {
                slug: parsedData.data.name,
                adminId: userId
            }
        })

        res.json({
            roomId: room.id
        })
    } catch(e) {
        res.status(411).json({
            message: "Room already exists with this name"
        })
    }
})

app.get("/chats/:roomId", async (req, res) => {
    try {
        const roomId = Number(req.params.roomId);
        console.log(req.params.roomId);
        const messages = await prismaClient.chat.findMany({
            where: {
                roomId: roomId
            },
            orderBy: {
                id: "desc"
            },
            take: 1000
        });

        res.json({
            messages
        })
    } catch(e) {
        console.log(e);
        res.json({
            messages: []
        })
    }
    
})

app.get("/room/:slug", async (req, res) => {
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
        where: {
            slug
        }
    });

    res.json({
        room
    })
})

app.listen(3001, () => {
    console.log("Server listening at port number: ", 3001);
});