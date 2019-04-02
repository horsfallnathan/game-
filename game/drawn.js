let spritesheet;
let spritedata;
class Sprite {
    constructor() {}

    preload() {}

    setup() {
        this.spritesheet = loadImage('./Assets/Spritesheet/sheet_charactersEquipment.png');
        // this.spritedata = loadXML('./Assets/Spritesheet/sheet_charactersEquipment.xml');
    }

    draw() {
        image(this.spritesheet, 0, 0);
    }
}
