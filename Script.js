// selecting appropriate selector in DOM environment
const video = document.querySelector("#youtube-video");
const pipVideo = document.querySelector("#pip-video");
const pipWindow = document.querySelector(".pip-window");
//initialize PiP as False at first place
let isInPiPMode = false;

//entering PIP Mode
function enterPiPMode() {
  if (!isInPiPMode) {
    console.log("Entered into PiP Mode");

    pipVideo.src = video.src;
    video.src = "https://www.youtube.com/embed/69SA8xPu4mA?autoplay=0&mute=1";

    pipWindow.style.display = "block";
    isInPiPMode = true;
  }
}
//exiting PIP mode
function exitPiPMode() {
  if (isInPiPMode) {
    console.log("Exited Custom PiP Mode");
    pipVideo.src = "";
    video.src = "https://www.youtube.com/embed/69SA8xPu4mA?autoplay=0&mute=1";
    pipWindow.style.display = "none";
    isInPiPMode = false;
  }
}

//toggoling between Enter and Exit Into PIP

function togglePiPMode() {
  if (isInPiPMode) {
    exitPiPMode();
  } else {
    enterPiPMode();
  }
}
// Listener for scrolling is out of bound of current vedio viewport
window.addEventListener("scroll", () => {
  const rect = video.getBoundingClientRect();
  console.log(window.innerHeight, window.innerWidth);
  console.log(rect.top, rect.left, rect.bottom, rect.right);
  if (
    rect.top < 0 ||
    rect.left < 0 ||
    rect.bottom > window.innerHeight ||
    rect.right > window.innerWidth
  ) {
    enterPiPMode();
  } else {
    exitPiPMode();
  }
});
