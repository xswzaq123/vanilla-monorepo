const fibTab = document.getElementById("fibTab");
const armTab = document.getElementById("armTab");
const armH = document.getElementById("armH");
const armStart = 1;
const armEnd = 1000;
armH.innerText = `Armstrong Number\n(${armStart} - ${armEnd})`;

// Fibonacci Generator
function fib(num) {
	if (num < 1) return 0;
	if (num === 1) return 1;
	return fib(num - 1) + fib(num - 2);
}

// Armstrong Generator
function armstrong(num) {
	let temp = num;
	let result = 0;
	let pow = getNumLen(num);
	while (temp > 0) {
		result += Math.pow(temp % 10, pow);
		temp = Math.floor(temp / 10);
	}
	return num === result;
}

// Fibonacci Call
for (let i = 0; i < 10; i++) {
	const row = document.createElement("tr");
	const dataI = document.createElement("td");
	const dataFib = document.createElement("td");
	dataI.innerText = i;
	dataFib.innerText = fib(i);
	fibTab.append(row);
	row.append(dataI);
	row.append(dataFib);
}

// Armstrong Call
for (let q = armStart; q < armEnd; q++) {
	if (armstrong(q)) {
		const row2 = document.createElement("tr");
		const dataArm = document.createElement("td");
		dataArm.innerText = q;
		armTab.append(row2);
		row2.append(dataArm);
	}
}

// Get length of integers
function getNumLen(num) {
	let count = 0;
	while (num > 0) {
		num = Math.floor(num / 10);
		count++;
	}
	return count;
}
