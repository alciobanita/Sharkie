class BackgroundObject extends MovableObject {
    width = 720; // Set the width of the background object
    height = 480; // Set the height of the background object

    world;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);

        this.x = x;
        this.y = 480 - this.height; // Set the y position to the bottom of the screen minus the height of the object
    }
}