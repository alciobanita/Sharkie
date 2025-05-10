class MoveableObject extends DrawableObject {
    speed = 0.15;
    world;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.05;
    maxSpeedY = 10;
    energy = 100;

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
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 480 - this.height;
        }
    }

    isColliding(mo) {
        return (
            this.x + this.width > mo.x &&
            this.x < mo.x + mo.width &&
            this.y + this.height > mo.y &&
            this.y < mo.y + mo.height
        );
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1 && timepassed > 0;
    }

    isDead() {
        return this.energy == 0;
    }

    // isDeadPoisoned() {
    //     return this.energy == 0;
    // }

    // isDeadElectrocuted() {
    //     return this.energy == 0;
    // }

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