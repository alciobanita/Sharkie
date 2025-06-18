class Button extends DrawableObject {

    Image_Button = 'img/6.Botones/Controls/play.png';

    constructor() {
        super().loadImage('img/6.Botones/Controls/play.png');
        this.loadImages(this.Image_Button);
        this.x = 150;
        this.y = 85;
        this.width = 200;
        this.height = 50;
    }

    loadImages(imagePath) {
        this.img = new Image();
        this.img.src = imagePath;
        this.img.onload = () => {
            this.draw();
        };
    }

    
}