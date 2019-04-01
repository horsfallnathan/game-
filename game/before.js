// class Pitch {
//     constructor() {
//     }

const GAME_WIDTH = 1240;
const GAME_HEIGHT = 840;
let x1 = 20;
let x2 = GAME_WIDTH - 40;
let y1 = 20;
let y2 = GAME_HEIGHT - 40;

function setup() {
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    frameRate(20);
}

function draw() {
    fill(0, 0, 0, 0);
    strokeWeight(4);
    stroke(255);
    rect(x1, y1, x2, y2); // Touchlines
    line(620, 20, 620, 820); // Middle line
    rect(20, GAME_HEIGHT / 2 - 150, 185, 300); //Home Penalty Box
    rect(1035, GAME_HEIGHT / 2 - 150, 185, 300); //Away Penalty Box
    circle(GAME_WIDTH / 2, GAME_HEIGHT / 2, 136); // Center circle
    strokeWeight(6);
    line(20, GAME_HEIGHT / 2 - 90, 20, GAME_HEIGHT / 2 + 90); // Home goal post
    line(1220, GAME_HEIGHT / 2 - 90, 1220, GAME_HEIGHT / 2 + 90); // Away goal post
}
