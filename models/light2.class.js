class Light2 extends MoveableObject {
    y = 0; 
    width = 720 * 1.5;
    height = 500;
    world;

    IMAGES_IDLE = [
        'img/3. Background/Layers/1. Light/2.png',
    ];

    world;

    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/2.png');
        this.loadImages(this.IMAGES_IDLE);
        this.x = 720*2.194;
    }

}