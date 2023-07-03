let canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvas.height = 200;
ctx.fillStyle = "#fff";
canvas.style.border = "1px solid #efefef";

let position = { x: 0, y: 0 };

document.body.append(canvas);

function drawSquare() {
  ctx.clearRect(0, 0, 300, 300);
  ctx.fillRect(position.x, position.y, 50, 50);
}

gsap.to(position, {
  x: 150,
  y: 150,
  duration: 4,
  onUpdate: drawSquare,
});
