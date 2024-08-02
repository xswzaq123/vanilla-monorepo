const c = document.querySelector("#c")
const d = document.querySelector("#d")
const e = document.querySelector("#e")
const f = document.querySelector("#f")
const g = document.querySelector("#g")
const a = document.querySelector("#a")
const b = document.querySelector("#b")

const play = (x) => {
    const note = x.target.id
    new Audio(`assets/${note}.mp3`).play()
}

const keyPlay = (x) => {
   if (x.repeat) return
    switch (x.key) {
        case 'z':
            new Audio('assets/c.mp3').play()
            c.style.background = "yellow"; 
            break;
        case 'x':
            new Audio('assets/d.mp3').play()
            d.style.background = "yellow";
            break;
        case 'c':
            new Audio('assets/e.mp3').play()
            e.style.background = "yellow"; 
            break;
        case 'v':
            new Audio('assets/f.mp3').play()
            f.style.background = "yellow";
            break;
        case 'b':
            new Audio('assets/g.mp3').play()
            g.style.background = "yellow"; 
            break;
        case 'n':
            new Audio('assets/a.mp3').play()
            a.style.background = "yellow";
            break;
        case 'm':
            new Audio('assets/b.mp3').play()
            b.style.background = "yellow"; 
            break;
        default:
            break;
    }
}

const undoBg = (x) => {
    switch (x.key) {
        case 'z':
            c.style.background = "#fff"; 
            break;
        case 'x':
            d.style.background = "#fff";
            break;
        case 'c':
            e.style.background = "#fff"; 
            break;
        case 'v':
            f.style.background = "#fff";
            break;
        case 'b':
            g.style.background = "#fff"; 
            break;
        case 'n':
            a.style.background = "#fff";
            break;
        case 'm':
            b.style.background = "#fff"; 
            break;
        default:
            break;
    }
}


window.addEventListener("keydown", keyPlay)
window.addEventListener("keyup", undoBg)
c.addEventListener("click", play)
d.addEventListener("click", play)
e.addEventListener("click", play)
f.addEventListener("click", play)
g.addEventListener("click", play)
a.addEventListener("click", play)
b.addEventListener("click", play)