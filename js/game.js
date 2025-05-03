let canvas;
let world;
let keyboard = new Keyboard(); 

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
        isSwimming = true;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
        isSwimming = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
        isSwimming = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
        isSwimming = true;
    }
    if (e.keyCode == 13) {
        keyboard.ENTER = true;
    }
    if (e.keyCode == 27) {
        keyboard.ESCAPE = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
        isSwimming = false;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
        isSwimming = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
        isSwimming = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
        isSwimming = false;
    }
    if (e.keyCode == 13) {
        keyboard.ENTER = false;
    }
    if (e.keyCode == 27) {
        keyboard.ESCAPE = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
});