class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 150;
    imageCache = [];
    currentImage = 0; // Set the current image index to 0
    speed = 0.15; // Set the forward speed of the character
    world; // Reference to the world object
    otherDirection = false; // Flag to check if the character is moving in the opposite direction

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
        let i = this.currentImage % images.length; // Calculate the index of the current image
        let path = images[i];
        this.img = this.imageCache[path]; // Set the image to the current image in the array
        this.currentImage++; // Increment the current image index
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60); // 10 frames per second
    }

}