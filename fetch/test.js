const p = document.getElementById("data");

const options = {
	url: "https://quotes15.p.rapidapi.com/quotes/random/",
	headers: {
		"X-RapidAPI-Key": "d5cb33308emshcafd9e4911458dcp18b033jsn1bfcf4ae56b6",
		"X-RapidAPI-Host": "quotes15.p.rapidapi.com",
	},
};

async function getUser() {
	p.innerText = "Getting quote...";
	try {
		let obj = await fetch(options.url, {
			headers: options.headers,
		});
		let data = await obj.json();
		p.innerText = data.content;
	} catch (error) {
		console.log(error);
		p.innerText = error;
	}
}
