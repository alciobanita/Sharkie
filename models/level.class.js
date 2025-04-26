class Level{
    enemies;
    lights;
    backgroundObjects;
    level_end_x = 720 * 3; 

    constructor(enms, lts, bgos) {
        this.enemies = enms;
        this.lights = lts;
        this.backgroundObjects = bgos;
    }
}