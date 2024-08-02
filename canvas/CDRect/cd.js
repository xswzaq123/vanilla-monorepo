/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const itemArr = [];
const item1 = {
	x: 50,
	y: 50,
	width: 50,
	height: 50,
	color: "green",
};

class Item {
	constructor(color = "white") {
		this.width = this.height = 50;
		this.x = Math.random() * (canvas.width - this.width);
		this.y = Math.random() * (canvas.height - this.height);
		this.color = color;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

for (let i = 0; i < 20; i++) {
	itemArr.push(new Item());
}

const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillText("RectCD Visualizer", 30, 30);
	itemArr.forEach((item) => {
		item.draw();
	});
	ctx.fillStyle = item1.color;
	ctx.fillRect(item1.x, item1.y, 50, 50);
	checkCollision();
	requestAnimationFrame(animate);
};

const checkCollision = () => {
	itemArr.forEach((item) => {
		if (
			item1.x > item.x + item.width ||
			item1.x + item1.width < item.x ||
			item1.y > item.y + item.height ||
			item1.y + item1.height < item.y
		) {
			item1.color = "green";
		} else {
			item1.color = "red";
		}
	});
};

document.addEventListener("keypress", (e) => {
	if (e.key === "d") {
		item1.x += 20;
	}
	if (e.key === "a") {
		item1.x -= 20;
	}
	if (e.key === "w") {
		item1.y -= 20;
	}
	if (e.key === "s") {
		item1.y += 20;
	}
});

animate();
