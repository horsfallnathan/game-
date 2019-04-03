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
        this.ply.mass = 2;
    }
    draw() {
        // fill(255);
        drawSprites();

        if (keyIsDown(LEFT_ARROW)) {
            player.ply.position.x -= 4;
            player.ply.mirrorX(-1);
            if (player.ply.position.x < 40) {
                player.ply.position.x = 45;
            }
        }

        if (keyIsDown(RIGHT_ARROW)) {
            player.ply.position.x += 4;
            player.ply.mirrorX(1);
            if (player.ply.position.x > GAME_WIDTH - 40) {
                player.ply.position.x = GAME_WIDTH - 45;
            }
        }
        if (keyIsDown(UP_ARROW)) {
            player.ply.position.y -= 4;
            player.ply.mirrorY(-1);
            if (player.ply.position.y < 40) {
                player.ply.position.y = 45;
            }
        }
        if (keyIsDown(DOWN_ARROW)) {
            player.ply.position.y += 4;
            player.ply.mirrorY(1);
            if (player.ply.position.y > GAME_HEIGHT - 40) {
                player.ply.position.y = GAME_HEIGHT - 45;
            }
        }
        // if (player.ply.position.x < 40) {
        //     player.ply.position.x = -player.ply.position.x;
        // }
        if (player.ply.position.y < 40) {
            player.ply.velocity.y = -player.ply.velocity.y;
        }
        if (player.ply.position.y > GAME_HEIGHT - 40) {
            player.ply.velocity.y = -player.ply.velocity.y;
        }
        if (player.ply.position.x > GAME_WIDTH - 40) {
            player.ply.velocity.x = -player.ply.velocity.x;
        }
        if (player.ply.position.x < 40) {
            player.ply.velocity.x = -player.ply.velocity.x;
        }

        if (player.ply.collide(ball.spr)) {
            // ball.spr.changeAnimation('rotate');
            // if keyDown('s') {
            //     ball.spr.addSpeed

            // }
            if (keyIsDown(LEFT_ARROW)) {
                ball.spr.rotationSpeed = -0.8;
                ball.spr.position.x -= 4;
                if (ball.spr.position.x < 40) {
                    ball.spr.velocity.x = -ball.spr.velocity.x;
                }
            }

            if (keyIsDown(RIGHT_ARROW)) {
                ball.spr.rotationSpeed = 0.8;
                ball.spr.position.x += 4;
                if (ball.spr.position.x > GAME_WIDTH - 40) {
                    ball.spr.velocity.x = -ball.spr.velocity.x;
                }
            }
            if (keyIsDown(UP_ARROW)) {
                ball.spr.rotationSpeed = 0.8;
                ball.spr.position.y -= 4;
                if (ball.spr.position.y < 40) {
                    ball.spr.velocity.y = -ball.spr.velocity.y;
                }
            }
            if (keyIsDown(DOWN_ARROW)) {
                ball.spr.rotationSpeed = -0.8;
                ball.spr.position.y += 4;
                if (ball.spr.position.y > GAME_HEIGHT - 40) {
                    ball.spr.velocity.y = -ball.spr.velocity.y;
                }
            }
            ball.spr.velocity.x = 1;
            ball.spr.velocity.y = 1;
        } else {
            ball.spr.changeAnimation('normal');
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
