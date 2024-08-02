import { songs } from "./songs.js";

const list = document.getElementById("list");
let currentSong = new Audio();

for (let i = 0; i < songs.length; i++) {
	const wrapper = document.createElement("div");
	const songTitle = document.createElement("li");
	const playBtn = document.createElement("button");
	const infoArtist = document.createElement("p");
	const time = document.createElement("p");
	wrapper.classList.add("wrapper");
	songTitle.innerText = songs[i].title;
	songTitle.classList.add("songList");
	playBtn.innerText = "▶";
	playBtn.classList.add("playBtn");
	infoArtist.innerText = songs[i].artist;
	infoArtist.style.color = "#9e9e9e";
	time.innerText = songs[i].duration;
	list.append(wrapper);
	wrapper.append(playBtn);
	wrapper.append(songTitle);
	wrapper.append(infoArtist);
	wrapper.append(time);
	playBtn.addEventListener("click", () => {
		if (songs[i].status === "playing") {
			songs[i].status = "paused";
			playBtn.innerText = "▶";
			currentSong.pause();
		} else {
			songs[i].status = "playing";
			// playBtn.innerText = "pause";
			playBtn.innerText = "||";
			currentSong.src = songs[i].path;
			currentSong.play();
		}
	});
}
