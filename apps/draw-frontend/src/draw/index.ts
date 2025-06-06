type Shape =
  | {
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      centerX: number;
      centerY: number;
      radius: number;
    };

export function initDraw(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  shape: string
) {
  const canvas = canvasRef.current;
  if (!canvas) return;

  let existingShapes: Shape[] = [];

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let clicked = false,
    startX = 0,
    startY = 0;
  canvas.addEventListener("mousedown", (e) => {
    clicked = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  if (shape == "rect") {
    canvas.addEventListener("mouseup", (e) => {
      clicked = false;
      const width = e.clientX - startX;
      const height = e.clientY - startY;

      existingShapes.push({
        type: "rect",
        x: startX,
        y: startY,
        height,
        width,
      });
    });

    canvas.addEventListener("mousemove", (e) => {
      if (clicked) {
        const width = e.clientX - startX;
        const height = e.clientY - startY;
        clearCanvas(existingShapes, ctx, canvas);
        ctx.strokeStyle = "white";
        ctx.strokeRect(startX, startY, width, height);
      }
    });
  } else if (shape == "circle") {
    canvas.addEventListener("mouseup", (e) => {
      clicked = false;
      const width = e.clientX - startX;
      const height = e.clientY - startY;
      const radius = Math.sqrt(width * width + height * height) / 2;
      const centerX = startX + width / 2;
      const centerY = startY + height / 2;

      existingShapes.push({
        type: "circle",
        centerX,
        centerY,
        radius,
      });
    });

    canvas.addEventListener("mousemove", (e) => {
      if (clicked) {
        const width = e.clientX - startX;
        const height = e.clientY - startY;
        const radius = Math.sqrt(width * width + height * height) / 2;
        const centerX = startX + width / 2;
        const centerY = startY + height / 2;

        clearCanvas(existingShapes, ctx, canvas);
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
  }
}

function clearCanvas(
  existingShapes: Shape[],
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  existingShapes.map((shape) => {
    if (shape.type == "rect") {
      ctx.strokeStyle = "white";
      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
    } else if(shape.type == "circle"){
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, Math.PI * 2);
        ctx.stroke()
    }
  });
}
