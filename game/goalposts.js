let awayPoint = 0;
let homePoint = 0;
class Posts {
    constructor() {}
    setup() {
        this.homegoal = createSprite(0, GAME_HEIGHT / 2, 40, 180);
        this.awaygoal = createSprite(GAME_WIDTH, GAME_HEIGHT / 2, 40, 180);
    }

    draw() {
        fill(0);
        drawSprites();

        if (post.homegoal.overlap(ball.spr)) {
            awayScores();
        }
        if (post.awaygoal.overlap(ball.spr)) {
            homeScores();
        }
    }
}
function awayScores() {
    awayPoint++;
    textSize(50);
    text('Away Team Scores!!!', GAME_WIDTH / 2 - 50, GAME_HEIGHT / 2);
}
function homeScores() {
    homePoint++;
    textSize(50);
    text('Home Team Scores!!!', GAME_WIDTH / 2 - 50, GAME_HEIGHT / 2);
}
