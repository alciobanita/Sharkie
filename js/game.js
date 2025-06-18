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
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
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
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
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
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});


let isMusicPlaying = false;

function toggleBackgroundMusic() {
    let audio = document.getElementById('backgroundMusic');
    let button = document.getElementById('musicButton');
    if (!isMusicPlaying) {
        audio.play().then(() => {
            isMusicPlaying = true;
            button.style.backgroundColor = '';
            button.style.filter = '';
        }).catch(error => {
            alert('Playback failed. Please interact with the page or check your browser settings.');
        });
    } else {
        audio.pause();
        isMusicPlaying = false;
        button.style.filter = 'grayscale(100%)';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let audio = document.getElementById('backgroundMusic');
    let button = document.getElementById('musicButton');
    if (audio) {
        audio.play().then(() => {
            isMusicPlaying = true;
            if (button) {
                button.style.backgroundColor = '';
                button.style.filter = '';
            }
        }).catch(() => {
            isMusicPlaying = false;
            if (button) {
                button.style.filter = 'grayscale(100%)';
            }
        });
    }
});