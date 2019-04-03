// let spring = 0.05;
// let gravity = 0.0;
let spr;
var iSprite;

class Ball {
    constructor() {
        this.xx = GAME_WIDTH / 2;
        this.yy = GAME_HEIGHT / 2;
        this.dx = 2;
        this.dy = 2;
    }

    setup() {
        this.spr = createSprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, 10, 10);
        this.spr.maxSpeed = 6;
        this.spr.friction = 0.02;
        // this.spr.velocity.x = 1;
        // this.spr.velocity.y = 1;
        this.spr.setSpeed = (1, random(360));
        this.spr.mass = 1;
        this.spr.rotationSpeed = 0.5;
        // this.spr.position.x = this.spr.position.x + this.dx;
        // this.spr.position.y = this.spr.position.y + this.dy;

        this.spr.addImage(blball);
        this.spr.addAnimation('rotate', ballanim);
    }

    draw() {
        // Draw ball
        // fill(255);
        drawSprites();
        if (ball.spr.velocity.x == 0 || ball.spr.velocity.y == 0) {
            ball.spr.rotationSpeed = 0;
        }
        // for (var i = 0; i < allSprites.length; i++) {
        //     iSprite = allSprites[i];
        //     // gravity: send them downward
        //     // iSprite.addSpeed(0.1, 180);
        //     //bounce off the ground
        //     if (iSprite.position.y > GAME_HEIGHT - 40 || iSprite.position.y < 40) {
        //         iSprite.velocity.y *= -1;
        //     }
        //     //remove if off the edges
        //     if (iSprite.position.x > GAME_WIDTH - 20 || iSprite.position.x < 20) {
        //         iSprite.velocity.x *= -1;
        //     }
        // iSprite.onMouseOver = removeAndScore;
        // }
        if (ball.spr.position.y < 40) {
            ball.spr.velocity.y = -ball.spr.velocity.y;
        }
        if (ball.spr.position.y > GAME_HEIGHT - 40) {
            ball.spr.velocity.y = -ball.spr.velocity.y;
        }
        if (ball.spr.position.x > GAME_WIDTH - 40) {
            ball.spr.velocity.x = -ball.spr.velocity.x;
        }
        if (ball.spr.position.x < 40) {
            ball.spr.velocity.x = -ball.spr.velocity.x;
        }
        // player.ply.displace(ball.spr);
        // player.ply.bounce(ball.spr);
    }
    // move() {}
}
