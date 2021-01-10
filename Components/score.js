
// https://www.npmjs.com/package/aframe-state-component
AFRAME.registerState({
  initialState: {
    score: 0
  },
 
  handlers: {
    decreaseScore: function (state, action) {
      state.score -= action.points;
      if (state.score < 0) {
        state.score = 0;
      }
      var scoreBoard = document.querySelector('#score');
      var newScore = 'Poin : ' + state.score;
      // scoreBoard.setAttribute('text', 'value',  newScore);
      scoreBoard.setAttribute('text', {
        "value": newScore,
        'font': 'https://cdn.aframe.io/fonts/Exo2Bold.fnt'
      });

      var ouch = document.querySelector("#tiger-spawn");
      ouch.components.sound.playSound();
    },
 
    increaseScore: function (state, action) {
      state.score += action.points;
      var scoreBoard = document.querySelector('#score');
      var newScore = 'Poin : ' + state.score;
      // scoreBoard.setAttribute('text', 'value',  newScore);
      scoreBoard.setAttribute('text', {
        "value": newScore,
        'font': 'https://cdn.aframe.io/fonts/Exo2Bold.fnt'
      });

      let sceneEl = document.querySelector('a-scene');
      var newBird = document.createElement('a-entity');
      newBird.setAttribute('mixin', 'bird');
      newBird.setAttribute('bird', '');
      newBird.setAttribute('class', 'clickable');

      sceneEl.appendChild(newBird);
    }
  }
});