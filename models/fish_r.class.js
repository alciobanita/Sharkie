class Fish_r extends MovableObject {

    width = 50;
    height = 50;

    IMAGES_IDLE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];

    world;

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png');
        this.loadImages(this.IMAGES_IDLE);

        this.x = 720*1.5 + Math.random() * 500;
        for (this.y = 0; this.y < World.length; this.y += 50) {
            this.y = Math.random() * 300;
        }

        this.speed = 0.2 + Math.random() * 0.5; 
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 200);

        this.moveLeft();
    }

}