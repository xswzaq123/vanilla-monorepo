/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const particleArr = [];
let hue = 0;

const mouse = {
	x: undefined,
	y: undefined,
};

window.addEventListener("load", () => {
	setCanvasSize()
})

canvas.addEventListener("mousemove", (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
});

window.addEventListener("resize", () => {
	setCanvasSize()
});

function setCanvasSize () {
	canvas.width = window.innerWidth;
	canvas.height =  window.innerHeight;
}

class Particle {
	constructor() {
		this.x = mouse.x;
		this.y = mouse.y;
		this.size = Math.random() * 15 + 1;
		this.speedX = Math.random() * 3 - 1.5;
		this.speedY = Math.random() * 3 - 1.5;
		this.color = `hsl(${hue}, 100%, 50%)`;
	}
	update() {
		this.x += this.speedX;
		this.y += this.speedY;
		if (this.size > 0.2) this.size -= 0.1;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fill();
	}
}

canvas.addEventListener("mousemove", () => {
	for (let i = 0; i < 2; i++) {
		particleArr.push(new Particle());
	}
});

const handleAni = () => {
	for (let i = 0; i < particleArr.length; i++) {
		particleArr[i].update();
		particleArr[i].draw();
		for (let j = i; j < particleArr.length; j++) {
			const dx = particleArr[i].x - particleArr[j].x;
			const dy = particleArr[i].y - particleArr[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			if (distance < 100) {
				ctx.strokeStyle = particleArr[i].color;
				ctx.lineWidth = 0.2;
				ctx.beginPath();
				ctx.moveTo(particleArr[i].x, particleArr[i].y);
				ctx.lineTo(particleArr[j].x, particleArr[j].y);
				// comment  the line below to disable line
				ctx.stroke();
			}
		}
		if (particleArr[i].size < 0.3) {
			particleArr.splice(i, 1);
			i--;
		}
	}
};

const animate = () => {
	// comment line below to disable clearing canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	handleAni();
	hue++;
	requestAnimationFrame(animate);
};

animate();
