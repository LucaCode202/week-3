const snareSound = document.getElementById("snareSound");
const hihatSound = document.getElementById("hiHatSound");
const crashSound = document.getElementById("openHatSound");
const tomSound = document.getElementById("tomSound");
const bassDrumSound = document.getElementById("bassSound");
const midTomSound = document.getElementById("kickSound");
const rideSound = document.getElementById("rideSound");
const tinkSound = document.getElementById("tinkSound");

document.addEventListener("keydown", (event) => {
  if (event.key == "a") {
    snareSound.play();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key == "s") {
    hiHatSound.play();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key == "d") {
    openHatSound.play();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key == "q") {
    bassDrumSound.play();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key == "e") {
    midTomSound.play();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key == "w") {
    rideSound.play();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key == "f") {
    tinkSound.play();
  }
});
