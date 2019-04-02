const game = new Game();

function setup() {
    game.setup();
}

function draw() {
    game.draw();
}

p5.prototype.collideCircleCircle = function(x, y, d, x2, y2, d2) {
    //2d
    if (this.dist(x, y, x2, y2) <= d / 2 + d2 / 2) {
        return true;
    }
    return false;
};
