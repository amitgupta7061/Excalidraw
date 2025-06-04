import { WS_URL } from "@/app/config";
import { useEffect, useState } from "react";


export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket]   = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmN2U5MmY3Ny03YzlkLTQ5ZGYtYmYzNy1iYTZkOGVjYmE2NjgiLCJpYXQiOjE3NDg5NjMyMTcsImV4cCI6MTc0OTU2ODAxN30.WDQNunskpuRcuUXMGJDoakxMBTqBr_XSQMoXXu-AHIU`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket, loading
    }
}