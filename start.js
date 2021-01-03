// https://stackoverflow.com/questions/53652132/a-frame-scene-with-intro-and-a-start-button
document.querySelector("#btn_start").onclick = function() {
  document.querySelector("#start").style.display = "none";

  var sound = document.querySelector("#trees");
  sound.components.sound.playSound();

  var player = document.querySelector("#player");
  player.getAttribute('movement-controls').enabled = true;

  var time = document.querySelector('#timer');
  time.setAttribute('timeee', '');
  time.setAttribute('text', 'opacity', 1);

  var score = document.querySelector('#score');
  score.setAttribute('text', 'opacity', 1);
}

document.querySelector("#btn_restart").onclick = function() {
  window.location.reload();
}