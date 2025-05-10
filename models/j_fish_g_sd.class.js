class J_Fish_g_sd extends MoveableObject {

    width = 50;
    height = 50;
    
    IMAGES_IDLE = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
    ];

    world;

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.IMAGES_IDLE);

        this.x = 720*3 + Math.random() * 500; 

        for (this.y = 0; this.y < World.length; this.y += 50) {
            this.y = Math.random() * 300;

        }

        this.speed = 0.3 + Math.random() * 0.5; 
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 200); 

        this.moveLeft();
    }

}