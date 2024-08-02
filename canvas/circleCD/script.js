/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let circle1 = {
	x: undefined,
	y: undefined,
	radius: 50,
};
let circle2 = {
	x: 1000,
	y: 450,
	radius: 50,
};

class Circle {
	constructor(x, y, rad) {
		this.x = x;
		this.y = y;
		this.radius = rad;
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fill();
	}
}

circle1 = new Circle(circle1.x, circle1.y, circle1.radius);
circle2 = new Circle(circle2.x, circle2.y, circle2.radius);

canvas.addEventListener("mousemove", (e) => {
	circle1.x = e.x;
	circle1.y = e.y;
});

const collision2D = () => {
	const dx = circle1.x - circle2.x;
	const dy = circle1.y - circle2.y;
	let distance = Math.sqrt(dx * dx + dy * dy);
	let radSum = circle1.radius + circle2.radius;
	if (distance < radSum) {
		color = "red";
	} else {
		color = "white";
	}
};

const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	collision2D();
	ctx.fillStyle = color;
	circle1.draw();
	ctx.fillStyle = "white";
	circle2.draw();
	ctx.beginPath();
	ctx.strokeStyle = "aqua";
	ctx.lineWidth = 3;
	ctx.moveTo(circle1.x, circle1.y);
	ctx.lineTo(circle2.x, circle2.y);
	ctx.stroke();
	requestAnimationFrame(animate);
};

animate();
