class Light extends MovableObject {
    y = 0; // Random y position
    width = 720 * 1.5;// Set the width of the fish
    height = 500; // Set the height of the fish
    world;

    IMAGES_IDLE = [
        'img/3. Background/Layers/1. Light/1.png',
        'img/3. Background/Layers/1. Light/2.png',
    ];

    world;

    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.x = 720;

        this.playAnimation(this.IMAGES_IDLE);	

    }
    
}