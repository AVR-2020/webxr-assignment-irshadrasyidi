
// https://www.npmjs.com/package/aframe-state-component
AFRAME.registerState({
  initialState: {
    score: 0
  },
 
  handlers: {
    decreaseScore: function (state, action) {
      state.score -= action.points;
      var scoreBoard = document.querySelector('#score');
      var newScore = 'Score: ' + state.score;
      scoreBoard.setAttribute('text', 'value',  newScore);

      var ouch = document.querySelector("#tiger-spawn");
      ouch.components.sound.playSound();
    },
 
    increaseScore: function (state, action) {
      state.score += action.points;
      var scoreBoard = document.querySelector('#score');
      var newScore = 'Score: ' + state.score;
      scoreBoard.setAttribute('text', 'value',  newScore);

      let sceneEl = document.querySelector('a-scene');
      var newBird = document.createElement('a-entity');
      newBird.setAttribute('mixin', 'bird');
      newBird.setAttribute('bird', '');
      newBird.setAttribute('class', 'clickable');
      // newBird.setAttribute('sound', {
      //   src: '#chirp',
      //   on: click
      // });
      sceneEl.appendChild(newBird);
    }
  }
});