// https://albert-gonzalez.github.io/easytimer.js/
var timer;

AFRAME.registerComponent('timeee', {
  schema: {
    time: { type: "number", default: 10 },
  },
  
  init: function () {
    
    timer = new Timer();
    // console.log(timer);
    timer.start({countdown: true, startValues: {seconds: this.data.time}});

    // $('#countdownExample .values').html(timer.getTimeValues().toString());

    timer.addEventListener('secondsUpdated', function (e) {
      // $('#countdownExample .values').html(timer.getTimeValues().toString());
      console.log(timer.getTimeValues());
    });

    timer.addEventListener('targetAchieved', function (e) {
      // $('#countdownExample .values').html('KABOOM!!');
      // console.log('tetot');
      document.querySelector("#end").style.display = "initial";

      var player = document.querySelector("#player");
      player.getAttribute('movement-controls').enabled = false;

      var player = document.querySelector("#tiger-spawn");
      player.removeAttribute('tiger-spawn');
    });

  },

  tick: function () {
    var timeText = timer.getTotalTimeValues().seconds;
    var timeBoard = document.querySelector('#timer');
    timeBoard.setAttribute('text', 'value',  'time : ' + timeText);
  },

  start: function () {
    var timer = new Timer();
    // console.log(timer);
    timer.start({countdown: true, startValues: {seconds: this.data.time}});
  }
});