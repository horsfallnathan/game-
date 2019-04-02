class Player {
    constructor() {
        this.xx = 40;
        this.yy = GAME_HEIGHT / 2;
    }
    setup() {
        this.ply = createSprite(40, GAME_HEIGHT / 2, 40, 40);
        this.ply.shapeColor = color(255);
        this.ply.velocity.y = 0;
        this.ply.velocity.x = 0;
    }
    draw() {
        // Draw player
        fill(255);
        drawSprites();
        circle(this.xx, this.yy, 20);

        // To move player around field
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
        // To keep player in field

        // if (this.xx < 40) {
        //     this.xx = 45;
        // }
        // if (this.xx > GAME_WIDTH - 40) {
        //     this.xx = GAME_WIDTH - 45;
        // }
        // if (this.yy < 40) {
        //     this.yy = 45;
        // }
        // if (this.yy > GAME_HEIGHT - 40) {
        //     this.yy = GAME_HEIGHT - 45;
        // }

        // if (keyCode === UP_ARROW) {
        //     player.ply.position.y = player.ply.position.y + 2;
        // } else if (keyCode === DOWN_ARROW) {
        //     player.ply.position.y = player.ply.position.y - 2;
        // }
        // if (keyCode === LEFT_ARROW) {
        //     player.ply.position.x = player.ply.position.x - 2;
        // } else if (keyCode === RIGHT_ARROW) {
        //     player.ply.position.x = player.ply.position.x + 2;
        // }
        // this.keyPressed();
        this.playerBounds();
    }

    // keyPressed() {
    // }
    playerBounds() {
        this.pBounds = {
            left: this.xx,
            top: this.yy,
            right: this.xx + 10,
            bottom: this.yy + 10
        };
    }
}

// keyPressed();
