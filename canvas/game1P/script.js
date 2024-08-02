/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const startBtn = document.getElementById("startBtn");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.font = "22px ComicSans";
// Player Controls
const p1Controls = {
	up: false,
	down: false,
	right: false,
	left: false,
};

const p2Controls = {
	up: false,
	down: false,
};

// Game variables
let start = false;
let gameOver = false;
const width = 20;
const height = 80;
let speed = 2;

let p1 = {
	x: 10,
	y: canvas.height * 0.5 - height,
	collision: false,
};

let p2 = {
	x: canvas.width - width - 15,
	y: canvas.height * 0.5 - height,
	collision: false,
};

// Class
class Player {
	constructor(x, y) {
		this.width = 20;
		this.height = 80;
		this.px = x;
		this.py = y;
	}
	createPlayer() {
		ctx.fillRect(this.px, this.py, this.width, this.height);
	}
}

class Ball {
	constructor() {
		this.x = canvas.width * 0.5;
		this.y = canvas.height * 0.5;
		this.radius = 10;
		this.dx = Math.random() * 3 - 1.5;
		this.dy = Math.random() * 3 - 1.5;
		this.speed = 9;
	}
	update() {
		if (p1.collision === true) {
			this.dx *= -1;
		}
		if (p2.collision === true) {
			this.dx *= -1;
		}
		if (this.y < 0 || this.y > canvas.height - this.radius) this.dy *= -1;
		this.x += this.dx * this.speed;
		this.y += this.dy * this.speed;
	}
	toCenter() {
		ctx.beginPath();
		ctx.fillStyle = "yellow";
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fill();
	}
}

// Check Player Control
document.addEventListener("keydown", (e) => {
	handlePlayerControls(e, p1Controls, "w", "s", "d", "a");
	handlePlayerControls(e, p2Controls, "ArrowUp", "ArrowDown");
});

document.addEventListener("keyup", (e) => {
	handlePlayerControls(e, p1Controls, "w", "s", "d", "a");
	handlePlayerControls(e, p2Controls, "ArrowUp", "ArrowDown");
});

function handlePlayerControls(
	e,
	playerControls,
	upkey,
	downkey,
	rightkey,
	leftkey
) {
	const key = e.key;
	if (key === upkey) {
		playerControls.up = e.type === "keydown";
	} else if (key === downkey) {
		playerControls.down = e.type === "keydown";
	} else if (key === rightkey) {
		playerControls.right = e.type === "keydown";
	} else if (key === leftkey) {
		playerControls.left = e.type === "keydown";
	}
}

// Control Mapping
const handleControl = () => {
	if (p1Controls.up) {
		if (p1.py < 10) {
			p1.py = p1.py;
		} else {
			p1.py -= speed;
		}
	}
	if (p1Controls.down) {
		if (p1.py > canvas.height - height) {
			p1.py = p1.py;
		} else {
			p1.py += speed;
		}
	}
	if (p1Controls.right) {
		p1.px += 3;
	}
	if (p1Controls.left) {
		p1.px -= 3;
	}

	if (p2Controls.up) {
		if (p2.py < 10) {
			p2.py = p2.py;
		} else {
			p2.py -= speed;
		}
	}

	if (p2Controls.down) {
		if (p2.py > canvas.height - height) {
			p2.py = p2.py;
		} else {
			p2.py += speed;
		}
	}
};

const isCollision = () => {
	if (
		ball.x - ball.radius > p1.px + p1.width ||
		ball.x + ball.radius < p1.px ||
		ball.y - ball.radius > p1.py + p1.height ||
		ball.y + ball.radius < p1.py
	) {
		p1.collision = false;
	} else {
		p1.collision = true;
	}
	if (
		ball.x - ball.radius > p2.px + p2.width ||
		ball.x + ball.radius < p2.px ||
		ball.y - ball.radius > p2.py + p2.height ||
		ball.y + ball.radius < p2.py
	) {
		p2.collision = false;
	} else {
		p2.collision = true;
	}
};

const isGameOver = () => {
	if (ball.x < 0 || ball.x > canvas.width - ball.radius) gameOver = true;
};

// Instantiating
p1 = new Player(p1.x, p1.y);
p2 = new Player(p2.x, p2.y);
const ball = new Ball();

// Functions
const drawMiddleLine = () => {
	ctx.beginPath();
	ctx.strokeStyle = "white";
	ctx.moveTo(canvas.width * 0.5, canvas.height);
	ctx.lineTo(canvas.width * 0.5, 0);
	ctx.stroke();
};

const startGame = () => {
	drawMiddleLine();
	ctx.fillStyle = "white";
	p1.createPlayer();
	p2.createPlayer();
	ball.toCenter();
	ball.update();
	handleControl();
	isCollision();
};

const showGameOverScreen = () => {
	startBtn.innerText = "Try Again?";
	ctx.beginPath();
	ctx.fillText("GAME OVER", canvas.width * 0.5 - 70, 400);
	ctx.closePath();
	startBtn.addEventListener("click", () => {
		startBtn.classList.add("hide");
		gameOver = false;
		start = true;
	});
};

// MainLoop
const gameLoop = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	isGameOver();
	if (start) {
		startGame();
	}
	if (gameOver) {
		start = false;
		startBtn.classList.remove("hide");
		showGameOverScreen();
	}
	requestAnimationFrame(gameLoop);
};

startBtn.addEventListener("click", () => {
	startBtn.classList.add("hide");
	start = true;
	isHomeScreen = false;
});

gameLoop();
