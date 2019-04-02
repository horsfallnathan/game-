let spring = 0.05;
let gravity = 0.0;
let spr;

class Ball {
    constructor() {
        this.xx = GAME_WIDTH / 2;
        this.yy = GAME_HEIGHT / 2;
        this.dx = 2;
        this.dy = 2;
    }

    setup() {
        this.spr = createSprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, 10, 10);
        this.spr.addImage(blball);
    }

    draw() {
        // Draw ball
        fill(255);
        // this.spr.position.x = mouseX;
        // this.spr.position.y = mouseY;
        drawSprites();
        // circle(this.xx, this.yy, 10);
        player.ply.displace(ball.spr);
    }
}
