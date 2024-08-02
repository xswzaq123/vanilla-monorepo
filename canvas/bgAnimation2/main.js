/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1920);
const CANVAS_HEIGHT = (canvas.height = 700);

const bg = new Image();
bg.src = "../assets/Legacy-Fantasy - High Forest 2.3/Background/Background.png";
let gameSpeed = 5;

class Background {
	constructor(image, speedModifier) {
		this.x = 0;
		this.y = 0;
		this.width = 3000;
		this.height = 700;
		this.image = image;
		this.speedModifier = speedModifier;
		this.speed = gameSpeed * this.speedModifier;
	}
	update() {
		if (this.x < -this.width) this.x = 0;
		this.x = Math.floor(this.x - this.speed);
	}
	draw() {
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		ctx.drawImage(
			this.image,
			this.x + this.width,
			this.y,
			this.width,
			this.height
		);
	}
}

const bg1 = new Background(bg, 1);

const animate = () => {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	bg1.update();
	bg1.draw();
	requestAnimationFrame(animate);
};

animate();
