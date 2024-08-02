/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const select = document.getElementById('selectState');
const curSpd = document.getElementById('currentSpeed');
const c = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const characterSprite = new Image();
characterSprite.src = '../assets/dog/dog.png';
const spriteWidth = 575; //total width of spriteImage / number of columns
const spriteHeight = 523; //total height of spriteImage / number of rows
let gameFrame = 0;
let staggerFrame = 5;
let currentPlayerState = select.value = 'run';

const spriteAnimations = [];
const animation = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'die',
        frames: 10,
    },
    {
        name: 'gethit',
        frames: 4,
    },
];

animation.forEach( (state, index) => {
    let frames = {
        loc: [],
    }
    for (let i = 0; i < state.frames; i++) {
        let posX = i * spriteWidth;   
        let posY = index * spriteHeight; 
        frames.loc.push({x: posX, y: posY});
    }
    spriteAnimations[state.name] = frames;
});

// const animate = () => {
//     c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //clear canvas
//     // c.fillRect(x, 200, 200, 200);
//     c.drawImage(characterSprite, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
//     if (gameFrame % staggerFrame == 0) {
//         if (frameX < 6) frameX++;
//         else frameX = 0;
//     }
//     gameFrame++;
//     requestAnimationFrame(animate); //call animate function
// };

const animateAdv = () => {
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //clear canvas
    // c.fillRect(x, 200, 200, 200);
    let pos = Math.floor(gameFrame/staggerFrame) % spriteAnimations[currentPlayerState].loc.length;
    let frameX = spriteAnimations[currentPlayerState].loc[pos].x;
    let frameY = spriteAnimations[currentPlayerState].loc[pos].y;
    c.drawImage(characterSprite, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    gameFrame++;
    requestAnimationFrame(animateAdv); //call animate function
}

select.addEventListener('change', e => {
    currentPlayerState = e.target.value;
});

animateAdv();
