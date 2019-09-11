import React, { useRef, useEffect, useState } from "react";

const canvasWidth = 1800;
const canvasHeight = 500;

function convertGrid(x: number, y: number) {
  const xConverted = x/10 - 90;
  const yConverted = -(y/10 - 25)
  return {
    x: xConverted,
    y: yConverted
  }
}

function drawGrid(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = "#222222";
  ctx.lineWidth = 1;
  let drawVertical = 0;
  ctx.beginPath();
  while (drawVertical * 2 < canvasWidth) {
    ctx.moveTo(canvasWidth / 2 + drawVertical, 0);
    ctx.lineTo(canvasWidth / 2 + drawVertical, canvasHeight);
    ctx.stroke();
    ctx.moveTo(canvasWidth / 2 - drawVertical, 0);
    ctx.lineTo(canvasWidth / 2 - drawVertical, canvasHeight);
    ctx.stroke();
    drawVertical += 100;
  }
  let drawHorizontal = 0;
  while (drawHorizontal * 2 < canvasHeight) {
    ctx.moveTo(0, canvasHeight / 2 + drawHorizontal);
    ctx.lineTo(canvasWidth, canvasHeight / 2 + drawHorizontal);
    ctx.stroke();
    ctx.moveTo(0, canvasHeight / 2 - drawHorizontal);
    ctx.lineTo(canvasWidth, canvasHeight / 2 - drawHorizontal);
    ctx.stroke();
    drawHorizontal += 100;
  }
}

function drawCoordinates(x: number, y: number, ctx: CanvasRenderingContext2D) {
  const pointSize = 3; // Change according to the size of the point.
  ctx.fillStyle = "#ff2626"; // Red color
  
  ctx.beginPath(); //Start path
  ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
  ctx.fill(); // Close the path and fill.
}

function getPosition(
  clickX: number,
  clickY: number,
  canvas: HTMLCanvasElement
) {
  const rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
    scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

  return {
    x: (clickX - rect.left) * scaleX, // scale mouse coordinates after they have
    y: (clickY - rect.top) * scaleY // been adjusted to be relative to element
  };
}

export default function TurretGridController({moveTurret}: {moveTurret: Function}) {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const [clickPosition, setClickPosition] = useState({ x: 900, y: 250 });
  useEffect(() => {
    if (!canvas || !canvas.current) return;
    let ctx = canvas.current.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawCoordinates(clickPosition.x, clickPosition.y, ctx);
    drawGrid(ctx);
  }, [canvas, clickPosition]);

  const clickHandler = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (!canvas.current) return;
    const clickPosition = {
      clickX: event.clientX,
      clickY: event.clientY
    };
    const position = getPosition(
      clickPosition.clickX,
      clickPosition.clickY,
      canvas.current
    );
    setClickPosition(position);
    moveTurret(convertGrid(position.x, position.y));
  };
  return (
    <div>
      <canvas
        style={{ width: "100%" }}
        ref={canvas}
        width={canvasWidth}
        height={canvasHeight}
        onClick={clickHandler}
      />
    </div>
  );
}
