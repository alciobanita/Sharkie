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
let isFullscreen = false;

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

function toggleFullscreen() {
    const canvas = document.getElementById('canvas');
    const button = document.getElementById('fullscreenButton');
    const buttonIcon = button.querySelector('.icon');

    if (!isFullscreen) {
        // Request fullscreen
        const docElm = document.documentElement;

        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.webkitRequestFullscreen) { // Safari
            docElm.webkitRequestFullscreen();
        } else if (docElm.mozRequestFullScreen) { // Firefox
            docElm.mozRequestFullScreen();
        } else if (docElm.msRequestFullscreen) { // IE/Edge
            docElm.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}

// Listen for fullscreen change events to update button state
function handleFullscreenChange() {
    const button = document.getElementById('fullscreenButton');
    const buttonIcon = button.querySelector('.icon');
    const canvas = document.getElementById('canvas');

    // Check if we're in fullscreen mode
    const fullscreenElement = document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

    if (fullscreenElement) {
        isFullscreen = true;
        buttonIcon.src = './img/6.Botones/Controls/compress.png'; // You'll need a compress/minimize icon
        buttonIcon.alt = 'Exit Fullscreen';
        canvas.classList.add('fullscreen');
    } else {
        isFullscreen = false;
        buttonIcon.src = './img/6.Botones/Controls/expand.png';
        buttonIcon.alt = 'Toggle Fullscreen';
        canvas.classList.remove('fullscreen');
    }
}

// Add event listeners for fullscreen change events (cross-browser)
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

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