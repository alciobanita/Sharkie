class BackgroundObject extends MovableObject {
    width = 720; 
    height = 480; 

    world;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);

        this.x = x;
        this.y = 480 - this.height;
    }
}