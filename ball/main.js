const ground = document.getElementById('ground')
const start = document.getElementById('startBtn')
const obj = document.getElementById('obj')
console.log(ground)

const dropBall = () => {
    start.classList.add('hide')
    obj.style.transform = 'translateY(37rem)'
}

const waitForKey = (x) => {
    if (x.key == 'd') {
        obj.style.transform = `translateX(5rem)` 
        console.log('d pressed')
    }
}


start.addEventListener('click', dropBall)
document.addEventListener('keypress', waitForKey)
