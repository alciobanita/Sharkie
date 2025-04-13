class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 150;

    loadImage(Path) {
        this.img = new Image();
        this.img.src = Path;
    }

    moveRight() {
        console.log("Moving right");
    }

    moveLeft() {
        console.log("Moving left");
    }
}