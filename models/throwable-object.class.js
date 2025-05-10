class ThrowableObject extends MoveableObject {

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();

        setInterval(() => {
            this.y -= this.speedY;
            this.x += 10;
        }, 25);
    }
}