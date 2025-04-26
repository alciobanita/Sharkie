class J_Fish_p_sd extends MovableObject {

    width = 50; // Set the width of the fish
    height = 50; // Set the height of the fish

    IMAGES_IDLE = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];

    world;

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_IDLE);

        this.x = 720 * 3 + Math.random() * 500; // Random x position

        for (this.y = 0; this.y < World.length; this.y += 50) {
            this.y = Math.random() * 300; // Random y position

        }

        this.speed = 0.3 + Math.random() * 0.5; // Random speed between 0.5 and 1.0
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 200); // 10 frames per second

        this.moveLeft();
    }

}