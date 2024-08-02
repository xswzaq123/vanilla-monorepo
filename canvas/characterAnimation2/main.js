/** @type { HTMLCanvasElement } */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 300;
const CANVAS_HEIGHT = canvas.height = 300;

const character = new Image();
character.src = '../assets/character/crowAnimations/crow.png';
const spriteWidth = 64;
const spriteHeight = 41;
let gameFrame = 0;
let staggerFrame = 10;
let curState = 'attack';

const spriteAnimations = [];
const charAnimations = [
    {
        name: 'walk',
        frames: 4,
    },
    {
        name: 'takeDmg',
        frames: 3,
    },
    {
        name: 'attack',
        frames: 5,
    },
    {
        name: 'jump',
        frames: 6,
    },
    {
        name: 'idle',
        frames: 4,
    },
    {
        name: 'die1',
        frames: 5,
    },
    {
        name: 'die2',
        frames: 5,
    },
];

charAnimations.forEach((state, index) => {
    let frame = {
        loc: [],
    };
    for (let i = 0; i < state.frames; i++) {
        let posX = i * spriteWidth;
        let posY = index * spriteHeight;
        frame.loc.push({ x: posX, y: posY });
    };
    spriteAnimations[state.name] = frame;
});


const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let pos = Math.floor((gameFrame / staggerFrame) % spriteAnimations[curState].loc.length);
    let frameX = spriteAnimations[curState].loc[pos].x;
    let frameY = spriteAnimations[curState].loc[pos].y;
    ctx.drawImage(character, frameX, frameY, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();
