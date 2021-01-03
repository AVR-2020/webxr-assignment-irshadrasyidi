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

    // $('#countdownExample .values').html(timer.getTimeValues().toString());

    timer.addEventListener('secondsUpdated', function (e) {
      // $('#countdownExample .values').html(timer.getTimeValues().toString());
      console.log(timer.getTimeValues());
    });

    timer.addEventListener('targetAchieved', function (e) {
      // $('#countdownExample .values').html('KABOOM!!');
      console.log('tetot');
    });

  },

  tick: function () {
    var timeText = timer.getTotalTimeValues().seconds;
    var timeBoard = document.querySelector('#timer');
    timeBoard.setAttribute('text', 'value',  timeText);
  },

  start: function () {
    var timer = new Timer();
    // console.log(timer);
    timer.start({countdown: true, startValues: {seconds: this.data.time}});
  }
});