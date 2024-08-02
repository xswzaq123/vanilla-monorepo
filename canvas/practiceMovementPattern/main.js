/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 600);
let noObj = 5;
let objects = [];

class Object {
	constructor() {
		this.speed = Math.random() * 2;
		this.angle = (90 * Math.PI) / 180;
		this.width = 60;
		this.height = 60;
		this.x = Math.random() * (canvas.width - this.width);
		this.y = Math.random() * (canvas.height - this.height);
	}
	update() {
		this.x += Math.sin(this.angle * 180) / Math.PI;
		this.angle += 0.1;
	}
	draw() {
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

for (i = 0; i < noObj; i++) {
	objects.push(new Object());
}

console.log(objects);

const animate = () => {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	objects.forEach((obj) => {
		obj.update();
		obj.draw();
	});
	requestAnimationFrame(animate);
};

animate();
