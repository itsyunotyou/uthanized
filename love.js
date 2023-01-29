const { div } = require("prelude-ls");

const petalNumbers = 24;
const flower = document.getElementById("flower");
for (var i = 0; i < petalNumbers; i++) {
  flower.innerHTML += '
  <div class = petal-container-wrapper style="transform: rotate(45)">
  <div class = peetal-container>
  <div class=petal> </div>

  </div>
  </div>'

}