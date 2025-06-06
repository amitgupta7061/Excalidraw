import React, { useEffect, useRef } from 'react'

const Canvas = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(canvasRef.current){
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
        }
    }, [canvasRef]);

  return (
    <div>
        <canvas ref={canvasRef} width={1200} height={1000}></canvas>
    </div>
  )
}

export default Canvas
