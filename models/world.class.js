class World {

    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw()
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas
        this.context.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        
        this.enemies.forEach(enemy => {
            this.context.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        //Draw() is being called in a loop using requestAnimationFrame
        requestAnimationFrame(() => this.draw());
    }
}
