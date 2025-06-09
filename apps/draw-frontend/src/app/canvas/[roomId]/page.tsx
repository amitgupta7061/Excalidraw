"use client";
import { initDraw } from "@/draw";
import { WS_URL } from "@/lib/config";
import {
  Circle,
  Diamond,
  Hexagon,
  RectangleEllipsis,
  RectangleHorizontal,
  Square,
  SquareActivity,
} from "lucide-react";
import { useParams } from "next/navigation";
import React, { use, useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [shape, setShape] = useState("rect");
  const param = useParams();
  const roomId = param.roomId;

  if(!roomId || typeof roomId !== "string") return;

  // Set canvas size after mount
  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    const ws = new WebSocket(WS_URL)

    ws.onopen = () => {
      setSocket(ws);
    }
  })

  if(!socket){
    return <div>
      Connecting to websocket....
    </div>
  }

  useEffect(() => {
    if (canvasRef.current && size.width > 0 && size.height > 0) {
      initDraw(canvasRef,shape, roomId);
    }
  }, [canvasRef, size, shape]);

  return (
    <div className="fixed inset-0 z-0">
      <div className="w-full flex items-center justify-center py-1">
        <div className="bg-[#303030] flex items-center justify-center gap-5 px-4 py-1.5 rounded-md">
          {[
            { type: "rect", icon: <RectangleHorizontal /> },
            { type: "circle", icon: <Circle /> },
            { type: "diamond", icon: <Diamond /> },
            { type: "hexa", icon: <Hexagon /> },
            { type: "square", icon: <Square /> },
            { type: "square_1", icon: <SquareActivity />}
          ].map(({ type, icon }) => (
            <button
              key={type}
              onClick={() => setShape(type)}
              className={`cursor-pointer rounded-full p-1 transition-all duration-300 
        ${shape === type ? "bg-zinc-600 text-black" : ""}
      `}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
      <canvas ref={canvasRef} width={size.width} height={size.height} />
    </div>
  );
};

export default Canvas;
