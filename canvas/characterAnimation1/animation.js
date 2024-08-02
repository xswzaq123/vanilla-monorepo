/** @type { HTMLCanvasElement } */ 

let currentAnimation = document.getElementById('aniName');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 763;
const CANVAS_HEIGHT = canvas.height = 200;

const character = new Image();
character.src = '../assets/character/reaper.png';
const spriteWidth = 32;
const spriteHeight = 32.1;
let gameFrame = 0;
let staggerFrame = 8;
let stateY = 0;
let hScroll = 0;
const spriteAnimations = [];
const characterAnimations = [
    {
        name: 'idle',
        frames: 2,
    },
    {
        name: 'blink',
        frames: 2,
    },
    {
        name: 'walk',
        frames: 4,
    },
    {
        name: 'run',
        frames: 8,
    },
    {
        name: 'duck',
        frames: 6,
    },
    {
        name: 'jump',
        frames: 8,
    },
    {
        name: 'fade',
        frames: 3,
    },
    {
        name: 'die',
        frames: 8,
    },
    {
        name: 'slash',
        frames: 8,
    },
];

characterAnimations.forEach((state, index) => {
    let frames = {
        loc: [],
    };
    for (let i = 0; i < state.frames; i++) {
        let posX = i * spriteWidth;
        let posY = index * spriteHeight;
        frames.loc.push({ x: posX, y: posY });
    }
    spriteAnimations[state.name] = frames;

});

let currentState = characterAnimations[stateY].name;


const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let pos = Math.floor(gameFrame/staggerFrame) % spriteAnimations[currentState].loc.length;
    let frameX = spriteAnimations[currentState].loc[pos].x;
    let frameY = spriteAnimations[currentState].loc[pos].y;
    ctx.drawImage(character , frameX, frameY, spriteWidth, spriteHeight, hScroll, CANVAS_HEIGHT - 50, spriteWidth, spriteHeight)
    gameFrame++;
    requestAnimationFrame(animate);
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (stateY > characterAnimations.length - 2) return;
            stateY++;
            currentState = characterAnimations[stateY].name;
            break;
        case 'ArrowLeft':
            currentState = 'run';
            hScroll -= 2;
            break;
        case 'ArrowDown':
            if (stateY < 1) return;
            stateY--;
            currentState = characterAnimations[stateY].name;
            break;
        case 'ArrowRight': 
            currentState = 'run';
            hScroll += 2;
            break;
        case 'x':
            currentState = 'slash';
            break;
        default:
            currentState = 'idle';
            break;
        }
    currentAnimation.innerText = currentState;
    document.addEventListener('keyup', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        currentState = 'idle';
        currentAnimation.innerText = currentState;

    });
});

currentAnimation.innerText = currentState;
animate();

