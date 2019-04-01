// let x = 40;
// let y = GAME_HEIGHT / 2;
// class Player {
//     constructor() {}

//     setup() {}

//     draw() {
//         if (keyIsDown(LEFT_ARROW)) {
//             x -= 5;
//         }

//         if (keyIsDown(RIGHT_ARROW)) {
//             x += 5;
//         }

//         if (keyIsDown(UP_ARROW)) {
//             y -= 5;
//         }

//         if (keyIsDown(DOWN_ARROW)) {
//             y += 5;
//         }

//         clear();

//         fill(255);
//         circle(x, y, 10);
//     }
// }

function Player() {
    this.xx = 40;
    this.yy = GAME_HEIGHT / 2;
    //bound takes 4 arguments x from screen top, y from screentop, width, height
    this.bound = {
        topBound: 20,
        leftBound: 800,
        rightBound: 1200,
        botBound: 1200
    };

    this.draw = function() {
        // Draw player
        fill(255);
        circle(this.xx, this.yy, 20);

        // To move player around field
        if (keyIsDown(LEFT_ARROW)) {
            this.xx -= 4;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.xx += 4;
        }
        if (keyIsDown(UP_ARROW)) {
            this.yy -= 4;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.yy += 4;
        }
        // To keep player in field
        if (this.xx < 40) {
            this.xx = 45;
        }
        if (this.xx > GAME_WIDTH - 40) {
            this.xx = GAME_WIDTH - 45;
        }
        if (this.yy < 40) {
            this.yy = 45;
        }
        if (this.yy > GAME_HEIGHT - 40) {
            this.yy = GAME_HEIGHT - 45;
        }
    };
}
