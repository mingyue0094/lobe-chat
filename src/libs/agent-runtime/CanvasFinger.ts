// CanvasFinger.ts
export function GenerateFinger(): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 10, 10);

  ctx.fillStyle = '#FFF';
  ctx.beginPath();
  ctx.arc(5, 15, 5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  const imageData = canvas.toDataURL();

  let hash: number = 0;
  for (let i = 0; i < imageData.length; i++) {
    const char = imageData.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }

  return hash.toString();
}
