// Function to change bg
const bg = document.getElementById("bg");
document.getElementById("btnFlip").addEventListener("click", changeBg);
function changeBg(){
    let hex = "ABCDEF0123456789";
    let newColor = "#";
    let i = 0;
    while (i < 6) {
        newColor += hex[Math.floor(Math.random() * hex.length)];
        i++;
    };
    bg.style.background = newColor
}

// Function to increment counter by 1
document.getElementById("btnCount").addEventListener("click", count);
function count() {
    let num = document.querySelector("p");
    num.innerHTML = +(num.innerHTML) + 1;
};