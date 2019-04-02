const game = new Game();
const ball = new Ball();
const player = new Player();
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
