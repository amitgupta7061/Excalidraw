"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleJoinRoom = () => {
    if (!roomId.trim()) {
      setError("Room ID cannot be empty.");
      return;
    }
    setError("");
    router.push(`/room/${roomId.trim()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h1 className="text-xl font-semibold text-center">Join a Room</h1>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          type="text"
          placeholder="Enter Room ID"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          onClick={handleJoinRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
