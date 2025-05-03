class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 150;
    imageCache = [];
    currentImage = 0;
    speed = 0.15; 
    world; 
    otherDirection = false; 
    speedY = 0;
    acceleration = 0.05;
    maxSpeedY = 10;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.speedY += this.acceleration; 
                if (this.speedY > this.maxSpeedY) {
                    this.speedY = this.maxSpeedY; 
                }
                this.y += this.speedY; 
            }
        }, 1000 / 60);
    }

    isAboveGround() {
        return this.y < 480 - this.height;
    }

    loadImage(Path) {
        this.img = new Image();
        this.img.src = Path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; 
        let path = images[i];
        this.img = this.imageCache[path]; 
        this.currentImage++; 
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

}