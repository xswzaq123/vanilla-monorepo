const img = document.getElementById("img");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const con = document.getElementById("carousel");
const root = document.querySelector(":root");
const imgs = document.querySelectorAll("img");
const imgWidth = imgs[0].clientWidth;
let x = imgWidth;
let counter = 1;

const nextImg = () => {
	con.style.translate = `-${x}px`;
	x += imgWidth;
	counter++;
};

const prevImg = () => {
	x -= imgWidth;
	con.style.translate = `-${x}px`;
	// x += imgWidth;
	counter--;
};

prev.addEventListener("click", () => {
	if (x <= 0) {
		x += imgWidth * imgs.length;
		prevImg();
		counter = 5;
	} else {
		prevImg();
	}
	console.log(x);
});

next.addEventListener("click", () => {
	if (counter < imgs.length) {
		nextImg();
	} else {
		console.log("over");
		x += -x;
		nextImg();

		counter = 1;
	}
	console.log(x);
});
