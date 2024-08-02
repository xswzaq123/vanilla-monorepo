/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1920);
const CANVAS_HEIGHT = (canvas.height = 960);
const noOfEnemies = 30;
let enemiesArr = [];
let gameFrame = 0;

class Enemy {
	constructor() {
		this.image = new Image();
		this.image.src = "../assets/dog/enemies/enemy2.png";
		this.frameX = 3;
		this.spriteWidth = 266;
		this.spriteHeight = 188;
		this.width = this.spriteWidth / 4; // size of sprite
		this.height = this.spriteHeight / 4; // size of sprite
		this.speed = Math.random() * 4 + 1;
		this.staggerFrame = Math.floor(Math.random() * 4 + 1); // animation interval
		this.x = Math.random() * (canvas.width - this.width); // keep within frame (x-axis)
		this.y = Math.random() * (canvas.height - this.height); // keep within frame (y-axis)
		this.angle = Math.random() * 3;
		this.curve = Math.random() * 3 + 1;
	}
	update() {
		this.angle += 0.1;
		if (gameFrame % this.staggerFrame === 0)
			this.frameX > 4 ? (this.frameX = 0) : this.frameX++;
		if (this.x + this.width < 0) this.x = canvas.width;
	}
	draw() {
		ctx.drawImage(
			this.image,
			this.frameX * this.spriteWidth,
			0,
			this.spriteWidth,
			this.spriteHeight,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}
}

for (let i = 0; i < noOfEnemies; i++) {
	enemiesArr.push(new Enemy());
}

const animate = () => {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	enemiesArr.forEach((enemy) => {
		enemy.update();
		enemy.draw();
	});
	gameFrame++;
	requestAnimationFrame(animate);
};

animate();
