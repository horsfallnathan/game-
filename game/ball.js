function Ball() {
    this.xx = GAME_WIDTH / 2;
    this.yy = GAME_HEIGHT / 2;
    this.dx = 1;
    this.dy = 1;

    this.draw = function() {
        // Draw ball
        fill(255);
        circle(this.xx, this.yy, 10);

        //
        this.xx = this.xx + this.dx;
        this.yy = this.yy + this.dy;

        if (this.xx < 40) {
            this.dx = -this.dx;
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

        if (this.xx < 20 || this.xx > width - 20) {
            this.dx = -this.dx;
        }
        if (
            this.yy < 20 ||
            (this.xx > this.player - 30 && this.xx < mouseX + 30 && this.yy === height - 70)
        ) {
            this.dy = -this.dy;
        }
        // if (
        //     (this.xx <= mouseX - 30 &&
        //         this.yy <= height - 50 &&
        //         dist(this.xx, this.yy, mouseX - 30, height - 50) <= 20) ||
        //     (this.xx >= mouseX + 30 &&
        //         this.yy <= height - 50 &&
        //         dist(this.xx, this.yy, mouseX + 30, height - 50) <= 20)
        // ) {
        //     this.dx = -this.dx;
        //     this.dy = -this.dy;
        // }
        // if (this.yy > height + 25) {
        //     this.dy = 0;
        //     this.dx = 0;
        // }
    };

    // function keyPressed() {
    //     x = random(20, width - 20);
    //     y = 20;
    //     dx = 1;
    //     dy = 1;
    // }
}
