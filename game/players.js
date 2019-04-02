class Player {
    constructor() {
        this.speed = 0;
        this.xx = 40;
        this.yy = GAME_HEIGHT / 2;
    }
    setup() {
        this.ply = createSprite(40, GAME_HEIGHT / 2);
        this.ply.addImage(playerhome);
        this.ply.velocity.y = 0;
        this.ply.velocity.x = 0;
    }
    draw() {
        fill(255);
        drawSprites();

        if (keyIsDown(LEFT_ARROW)) {
            player.ply.position.x -= 4;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            player.ply.position.x += 4;
        }
        if (keyIsDown(UP_ARROW)) {
            player.ply.position.y -= 4;
        }
        if (keyIsDown(DOWN_ARROW)) {
            player.ply.position.y += 4;
        }

        this.playerBounds();
    }

    playerBounds() {
        this.pBounds = {
            left: this.xx,
            top: this.yy,
            right: this.xx + 10,
            bottom: this.yy + 10
        };
    }
}
