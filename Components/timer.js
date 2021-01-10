// https://albert-gonzalez.github.io/easytimer.js/
var timer;

AFRAME.registerComponent('timeee', {
  schema: {
    time: { type: "number", default: 120 },
  },
  
  init: function () {
    
    timer = new Timer();
    // console.log(timer);
    timer.start({countdown: true, startValues: {seconds: this.data.time}});

    timer.addEventListener('secondsUpdated', function (e) {
      // console.log(timer.getTimeValues());
    });

    timer.addEventListener('targetAchieved', function (e) {
      // console.log('tetot');
      document.querySelector("#end").style.display = "initial";

      var player = document.querySelector("#player");
      player.getAttribute('movement-controls').enabled = false;

      var tiger = document.querySelector("#tiger-spawn");
      tiger.removeAttribute('tiger-spawn');

      var finalScore = AFRAME.scenes[0].systems.state.state.score;

      var finalScoreStr = 'Poin Akhir : ' + finalScore;
      // console.log(finalScoreStr);
      document.getElementById('finalscoreboard').innerHTML  = finalScoreStr;

      var score = document.querySelector("#score");
      var timer = document.querySelector("#timer");

      score.parentNode.removeChild(score);
      timer.parentNode.removeChild(timer);

    });

  },

  tick: function () {
    var timeText = timer.getTotalTimeValues().seconds;
    var timeBoard = document.querySelector('#timer');
    timeBoard.setAttribute('text', 'value',  'Waktu : ' + timeText);
  },

  start: function () {
    var timer = new Timer();
    // console.log(timer);
    timer.start({countdown: true, startValues: {seconds: this.data.time}});
  }
});