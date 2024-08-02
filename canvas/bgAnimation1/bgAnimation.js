/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const gs = document.getElementById("gameSpeed");
const range = document.getElementById("range");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1920);
const CANVAS_HEIGHT = (canvas.height = 700);

const bg1 = new Image();
bg1.src = "../assets/dog/bg/layer-1.png";
const bg2 = new Image();
bg2.src = "../assets/dog/bg/layer-2.png";
const bg3 = new Image();
bg3.src = "../assets/dog/bg/layer-3.png";
const bg4 = new Image();
bg4.src = "../assets/dog/bg/layer-4.png";
const bg5 = new Image();
bg5.src = "../assets/dog/bg/layer-5.png";

let gameSpeed = 10;
range.value = gameSpeed;
gs.innerText = range.value;

class bgLayer {
	constructor(image, speedModifier) {
		this.x = 0;
		this.y = 0;
		// this.x2 = 2400;
		this.width = 2400;
		this.height = 700;
		this.image = image;
		this.speedModifier = speedModifier;
		this.speed = gameSpeed * this.speedModifier;
	}
	update() {
		this.speed = gameSpeed * this.speedModifier;
		if (this.x < -this.width) this.x = 0 - 3;
		// if (this.x2 < -2400) this.x = 2400 + this.x - gameSpeed;
		this.x = Math.floor(this.x - this.speed);
		// this.x2 = Math.floor(this.x - this.speed);
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

const layer1 = new bgLayer(bg1, 0.5);
const layer2 = new bgLayer(bg2, 0.5);
const layer3 = new bgLayer(bg3, 0.5);
const layer4 = new bgLayer(bg4, 0.5);
const layer5 = new bgLayer(bg5, 1);

const layers = [layer1, layer2, layer3, layer4, layer5];

const animateBg = () => {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	layers.forEach((bg) => {
		bg.update();
		bg.draw();
	});
	requestAnimationFrame(animateBg);
};

range.addEventListener("change", () => {
	gameSpeed = range.value;
	gs.innerText = range.value;
});
animateBg();
