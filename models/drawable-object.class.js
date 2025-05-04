class DrawableObject{
    x = 120;
    y = 250;
    height = 150;
    width = 150;
    img;
    imageCache = [];
    currentImage = 0;

    loadImage(Path) {
        this.img = new Image();
        this.img.src = Path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Fish_g || this instanceof Fish_r || this instanceof Fish_b || this instanceof J_Fish_l || this instanceof J_Fish_y || this instanceof J_Fish_g_sd || this instanceof J_Fish_p_sd || this instanceof Endboss) {

            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}