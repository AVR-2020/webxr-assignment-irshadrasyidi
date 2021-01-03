document.querySelector("button").onclick = function() {
  document.querySelector("#loading").style.display = "none";

  var sound = document.querySelector("#trees");
  sound.components.sound.playSound();

  var player = document.querySelector("#player");
  player.getAttribute('movement-controls').enabled = true;

  var time = document.querySelector('#timer');
  time.setAttribute('timeee', '');
}
