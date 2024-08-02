/**@type {HTMLCanvasElement} */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;
let counter = 2;
let amp = 2;
let rad = 0;
let x = 20;
let y = canvas.height * 0.5;

function draw() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = `rgba(0,0,0,0.1)`;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	y += Math.sin(rad * 0.8) * amp;
	// x += Math.sin(rad + canvas.height);
	ctx.beginPath();
	ctx.fillStyle = "yellow";
	// ctx.arc(x, y, 20, 0, Math.PI * 2);
	// ctx.fill();
	ctx.fillRect(x, y, 50, 50);
	if (x + 50 > canvas.width || x < 0) {
		counter = -counter;
	}
	x += counter;
	rad += 0.1;
	requestAnimationFrame(draw);
}

draw();
