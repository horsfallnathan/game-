class Game {
    constructor() {
        // this.gameOver = false;
        // this.playerOneScore = 0;
        // this.playerTwoScore = 0;
        this.pitch = new Pitch();
        this.player = new Player();
        // this.players = Players[]
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT);
        frameRate(60);
    }

    draw() {
        // clear();
        background(0, 180, 0);
        this.pitch.draw();
        this.player.draw();
    }

    over() {
        this.gameOver = true;
        // clearInterval(this.scoreInterval);
    }
}