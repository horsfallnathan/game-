const game = new Game();
const ball = new Ball();
const player = new Player();
let ballanim;
// const sprite = new Sprite();

var blball;
var blball2;
// let friction = -0.9;
function preload() {
    blball = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/game-/master/game/Assets/SoccerBallsmall.png'
    );
    blball2 = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/game-/master/game/Assets/SoccerBallsmall2.png'
    );
    playerhome = loadImage(
        'https://raw.githubusercontent.com/horsfallnathan/game-/master/game/Assets/playerwhitebg.png'
    );

    ballanim = loadAnimation(blball, blball2);
    ballanim.frameDelay = 10;
}

function setup() {
    game.setup();
    ball.setup();
    // ball.move();
    player.setup();
    // sprite.preload();
}

function draw() {
    game.draw();
}
