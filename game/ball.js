let spring = 0.05;
let gravity = 0.0;
// let friction = -0.9;

class Ball {
    constructor() {
        this.xx = GAME_WIDTH / 2;
        this.yy = GAME_HEIGHT / 2;
        this.dx = 2;
        this.dy = 2;
    }
    setup() {
        this.spr = createSprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, 40, 40);
        this.spr.shapeColor = color(255);
        // this.spr.velocity.y = -0.5;
        // this.spr.velocity.x = -0.5;
        // this.spr2 = createSprite(GAME_WIDTH / 2, GAME_HEIGHT / 4, 40, 40);
        // this.spr2.shapeColor = color(255);
        // this.spr2.velocity.y = 0.5;
        // this.spr2.velocity.x = 0.5;
    }

    draw() {
        // Draw ball
        fill(255);
        drawSprites();
        player.ply.displace(ball.spr);
        // circle(this.xx, this.yy, 10);

        //
        // this.xx = this.xx + this.dx;
        // this.yy = this.yy + this.dy;

        if (this.spr < 40) {
            this.spr.velocity.y = -0.5;
            this.spr.velocity.x = -0.5;
        }
        if (this.xx > GAME_WIDTH - 40) {
            this.dx = -this.dx;
        }
        if (this.yy < 40) {
            this.dy = -this.dy;
        }
        if (this.yy > GAME_HEIGHT - 40) {
            this.dy = -this.dy;
        }

        // if (this.xx < 20 || this.xx > width - 20) {
        //     this.dx = -this.dx;
        // }
        // collide();

        let hit = collideCircleCircle(
            this.xx,
            this.yy,
            30,
            game.player.pBounds.left,
            game.player.pBounds.top,
            60
        );
        // console.log('coliding? ' + hit);
        if (hit) {
            this.dx *= 1.2;
            this.dy *= 1.2;
        }
        // this.collide();

        // function keyPressed() {
        //     x = random(20, width - 20);
        //     y = 20;
        //     dx = 1;
        //     dy = 1;
        // }
    }
    // collide() {
    //     let ddx = game.player.pBounds.left - this.xx;
    //     let ddy = game.player.pBounds.top - this.yy;
    //     let distance = sqrt(ddx * ddx + ddy * ddy);
    //     let minDist = 40 / 2 + 30 / 2;
    //     // return minDist;
    //     // return distance
    //     if (distance < minDist) {
    //         console.log('2');
    //         this.xx *= 3;
    //         this.yy *= 3;
    //     }
    // }

    // collide() {
    //     let ddx = game.player.pBounds.left - this.xx;
    //     let ddy = game.player.pBounds.top - this.yy;
    //     let distance = sqrt(ddx * ddx + ddy * ddy);
    //     let minDist = 40 / 2 + 30 / 2;
    //     //   console.log(distance);
    //     //console.log(minDist);
    //     if (distance < minDist) {
    //         console.log('2');
    //         this.xx *= -1;
    //         this.yy *= -1;
    //     }
    // }
}
