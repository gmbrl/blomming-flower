let myAudio = new Audio("./Ceylon.mp3");

window.onload = function () {
    setInterval(GameLoop, 1000 / 10);
};

function GameLoop() {
    if (myAudio.paused) {
        myAudio.play().catch(error => {
            console.log("Audio playback blocked. User interaction is required.");
        });
    }
}