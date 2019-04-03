let awayPoint = 0;
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
    }
}
function awayScores() {
    awayPoint++;
    console.log(awayPoint);
}
