class Pitch {
    constructor() {
        this.x1 = 20;
        this.x2 = GAME_WIDTH - 40;
        this.y1 = 20;
        this.y2 = GAME_HEIGHT - 40;
    }

    setup() {
        console.log(this.x1, this.x2, this.y1, this.y2);
    }

    draw() {
        fill(0, 0, 0, 0);
        strokeWeight(4);
        stroke(255);
        rect(this.x1, this.y1, this.x2, this.y2); // Touchlines
        line(620, 20, 620, 820); // Middle line
        rect(20, GAME_HEIGHT / 2 - 150, 185, 300); //Home Penalty Box
        rect(1035, GAME_HEIGHT / 2 - 150, 185, 300); //Away Penalty Box
        circle(GAME_WIDTH / 2, GAME_HEIGHT / 2, 136); // Center circle
        strokeWeight(6);
        line(20, GAME_HEIGHT / 2 - 90, 20, GAME_HEIGHT / 2 + 90); // Home goal post
        line(1220, GAME_HEIGHT / 2 - 90, 1220, GAME_HEIGHT / 2 + 90); // Away goal post
    }
}
