


var game, healthBar;
var keys;
var map;

function startGame() {
  const map2 = require("./game/map.js");
  // NOTE: canvas
  game = document.getElementById('game');
  healthBar = document.getElementById("healthBar");

  // NOTE: user Input
  window.addEventListener('keydown', function (e) {
      e.preventDefault();
      keys = (keys || []);
      keys[e.keyCode] = (e.type == "keydown");
  });

  window.addEventListener('keyup', function (e) {
      keys[e.keyCode] = (e.type == "keydown");
  });

  map = new Map();
  map.generate();




  setInterval(update, 100);
}

function update() {
  if (keys && keys[37] || keys && keys[65])
    console.log("left");
  else if (keys && keys[39] || keys && keys[68])
    console.log("right");
  if (keys && keys[38] || keys && keys[87])
    console.log("up");
  else if (keys && keys[40] || keys && keys[83])
      console.log("down");
}
