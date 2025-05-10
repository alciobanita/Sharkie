class Light1 extends MoveableObject {
    y = 0; 
    width = 720 * 1.5;
    height = 500; 
    world;

    IMAGES_IDLE = [
        'img/3. Background/Layers/1. Light/1.png',

    ];

    world;

    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.x = 500;
    }

}