class Character extends MovableObject {

    height = 150;
    width = 150;
    speed = 10;

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.SWIM/1.png',
        'img/1.Sharkie/3.SWIM/2.png',
        'img/1.Sharkie/3.SWIM/3.png',
        'img/1.Sharkie/3.SWIM/4.png',
        'img/1.Sharkie/3.SWIM/5.png',
        'img/1.Sharkie/3.SWIM/6.png',
    ];

    IMAGES_ATTACK_FINSLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];

    IMAGES_ATTACK_P_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];

    IMAGES_HURT_POISONED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',

    ];

    IMAGES_HURT_ELECTROCUTED = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    // IMAGES_DEAD_POISONED = [
    //     'img/1.Sharkie/6.dead/1.Poisoned/1.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/2.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/3.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/4.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/5.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/6.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/7.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/8.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/9.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/10.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/11.png',
    //     'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    // ];

    IMAGES_DEAD_ELECTROCUTED = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png',
        
    ];

    world;
    isSwimming = false;


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_ATTACK_FINSLAP);
        this.loadImages(this.IMAGES_ATTACK_P_BUBBLE);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_HURT_ELECTROCUTED);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_DEAD_ELECTROCUTED);
        // this.loadImages(this.IMAGES_DEAD_POISONED);

        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (world.keyboard.RIGHT && this.x < world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.isSwimming = true;
            }

            if (world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.isSwimming = true;
            }

            world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (world.keyboard.UP) {
                this.y -= this.speed;
                this.isSwimming = true;
                this.isAboveGround() ? this.speedY = 0 : this.speedY = -this.speed;
            }

            if (world.keyboard.DOWN) {
                this.y += this.speed;
                this.isSwimming = true;
            }

            if (this.y < 0) {
                this.y = 0;
            }

            if (this.y > 480 - this.height) {
                this.y = 480 - this.height;
            }
        }, 1000 / 60);

        setInterval(() => {

            // if (this.isHurtPoisoned()) {
            //     this.playAnimation(this.IMAGES_HURT_POISONED);
            // }

            // if (this.isHurtElectrocuted()) {
            //     this.playAnimation(this.IMAGES_HURT_ELECTROCUTED);
            // }

            // if (this.isDeadPoisoned()) {
            //     this.playAnimation(this.IMAGES_DEAD_POISONED);
            // }
            // if (this.isDeadElectrocuted()) {
            //     this.playAnimation(this.IMAGES_DEAD_ELECTROCUTED);
            // }

            // if (this.isAttackingFinSlap()) {
            //     this.playAnimation(this.IMAGES_ATTACK_FINSLAP);
            // }

            // if (this.isAttackingBubbleTrap()) {
            //     this.playAnimation(this.IMAGES_ATTACK_P_BUBBLE);
            // }

            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            }
            
            else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT_ELECTROCUTED);
            }

            else if (this.isSwimming == true) {
                this.playAnimation(this.IMAGES_SWIMMING);
            }

            else if (this.isSwimming == false) {
                this.playAnimation(this.IMAGES_IDLE);
            }

            this.isSwimming = false;
        }, 180);
    }


}
