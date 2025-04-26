class Character extends MovableObject {

    height = 150;
    width = 150;
    speed = 10;

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];

    world;

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.currentImage = 0;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (world.keyboard.RIGHT && this.x < world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            
            if (world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }

            world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (world.keyboard.UP) {
                this.y -= this.speed;
            }

            if (world.keyboard.DOWN) {
                this.y += this.speed;
            }

            if (this.y < 0) {
                this.y = 0;
            }

            if (this.y > 480 - this.height) {
                this.y = 480 - this.height;
            }
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 180);
    }
}
