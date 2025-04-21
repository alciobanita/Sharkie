class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 150;
    imageCache = [];
    currentImage = 0; // Set the current image index to 0
    speed = 0.15; // Set the forward speed of the character

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

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60); // 10 frames per second
    }
    
}