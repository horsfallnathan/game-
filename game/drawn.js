let spritesheet;
let spritedata;
let sprName;
let sprheight;
let sprwidth;
let sprxpos;
let sprypos;

class Sprite {
    constructor() {
        this.animato = [];
    }

    preload() {
        this.spritesheet = loadImage(
            'https://raw.githubusercontent.com/horsfallnathan/game-/master/game/Assets/Spritesheet/sheet_charactersEquipment.png'
        );
        // playerpiece;
        this.spritedata = loadXML(
            'https://raw.githubusercontent.com/horsfallnathan/game-/8f71e268189c73d22b5254d4edf00f3b32076b5e/game/Assets/Spritesheet/sheet_characters.xml'
        );
    }

    setup() {
        // console.log(this.spritedata);
        let newFrame = [];
        image(this.spritesheet, 0, 0);
        let children = this.spritedata.getChildren('SubTexture');
        for (let i = 0; i < children.lenght; i++) {
            this.sprName = children[i].getString('name');
            this.sprxpos = children[i].getNum('x');
            this.sprypos = children[i].getNum('y');
            this.sprwidth = children[i].getNum('width');
            this.sprheight = children[i].getNum('height');
            newFrame.push(this.sprName + ', ' + this.sprxpos + ', ' + this.sprypos);
        }
        // this.animato.push();
        // console.log(newFrame);
    }

    draw() {}
}
