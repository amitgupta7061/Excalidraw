"use client";

import { useSocket } from "@/hooks/useSocket";
import { useEffect, useState, useCallback } from "react";

export function ChatRoomClient({
  messages,
  id,
}: {
  messages: { message: string }[];
  id: string;
}) {
  const { socket, loading } = useSocket();
  const [chats, setChats] = useState(messages);
  const [currMessage, setCurrMessage] = useState("");

  useEffect(() => {
    if (!socket || loading) return;

    socket.send(
      JSON.stringify({
        type: "join_room",
        roomId: id,
      })
    );

    socket.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        console.log("WS received:", parsedData);
        if (parsedData.type === "chat") {
          setChats((prev) => [...prev, { message: parsedData.message }]);
        }
      } catch (error) {
        console.error("Invalid message format", error);
      }
    };

    return () => {
      socket.onmessage = null;
    };
  }, [socket, loading, id]);

  const handleSend = useCallback(() => {
    if (!currMessage.trim() || !socket) return;

    socket.send(
      JSON.stringify({
        type: "chat",
        roomId: id,
        message: currMessage.trim(),
      })
    );

    setChats((prev) => [...prev, { message: currMessage.trim() }]);
    setCurrMessage("");
  }, [currMessage, socket, id]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="mb-4 space-y-2">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded px-3 py-2 text-sm text-gray-800"
          >
            {chat.message}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-1"
          placeholder="Enter your message"
          value={currMessage}
          onChange={(e) => setCurrMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
