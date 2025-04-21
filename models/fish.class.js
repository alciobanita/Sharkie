class Fish extends MovableObject {

    y = 0; // Random y position
    width = 50; // Set the width of the fish
    height = 50; // Set the height of the fish

    IMAGES_IDLE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];
    world;

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_IDLE);

        this.x = 200 + Math.random() * 500; // Random x position
        this.y = Math.random() * 500; // Random y position

        this.speed = 0.15 + Math.random() * 0.5; // Random speed between 0.5 and 1.0
        this.animate();
    }

    animate() {
        setInterval(() => {
            let path = this.IMAGES_IDLE[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
            if (this.currentImage >= this.IMAGES_IDLE.length) {
                this.currentImage = 0; // Reset to the first image
            }
        }, 200); // 10 frames per second

        this.moveLeft();
    }

}