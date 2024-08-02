const search = document.getElementById("iSearch");
const sug = document.getElementById("suggestion");
sug.classList.add(".hidden");

const arr = [
	"cow",
	"penguin",
	"whale",
	"dolphin",
	"shark",
	"elephant",
	"giraffe",
	"dog",
	"cat",
	"leopard",
	"walrus",
	"lynx",
	"blue whale",
];

let shown = [];

const handleSearch = () => {
	if (search.value == "") {
		shown.splice(0, shown.length);
		sug.classList.add(".hidden");
		sug.innerText = "";
		return;
	}
	sug.classList.remove(".hidden");
	arr.forEach((ele) => {
		if (ele.includes(search.value)) {
			const row = document.createElement("tr");
			const data = document.createElement("td");
			data.innerText = ele;
			console.log(shown);
			if (shown.includes(ele)) return;
			shown.push(ele);
			sug.append(row);
			row.append(data);
			return;
		}
	});
};

const filterItems = (x, prompt) => {
	return arr.filter((x) => x.toLowerCase().includes(prompt.toLowerCase()));
};
