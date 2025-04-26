class World {

    character = new Character();
    level = level1; // Set the level for the world
    canvas;
    ctx;
    keyboard;
    world;
    camera_x = 0; // Initial camera position


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.World = this; // Set the world for the character
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas

        this.ctx.translate(this.camera_x, 0); // Move the camera to the left

        this.addObjectsToMap(this.level.backgroundObjects); // Corrected property name
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.lights);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0); // Reset the camera position

        // Draw() is being called in a loop using requestAnimationFrame
        requestAnimationFrame(() => this.draw());
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = -mo.x; // Invert the x position for the mirrored image
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        if (mo.otherDirection) {
            mo.x = -mo.x; // Reset the x position to the original value
            this.ctx.restore();
        }
    }
}
