AFRAME.registerComponent('bird', {
  // dependencies: ['position'],

  init: function () {

    this.el.setAttribute('position', getRandomBirdPosition());
    this.el.setAttribute('rotation', getRandomBirdRotation());
    // https://github.com/aframevr/aframe/blob/master/docs/core/utils.md
    this.throttledFunction = AFRAME.utils.throttle(this.rotate, getRandomIntInclusive(2000, 5000), this);

    this.el.addEventListener('click', function(ev) {
      AFRAME.scenes[0].emit('increaseScore', {points: 20});
      this.remove();
    });
  },

  rotate: function () {
    this.el.setAttribute('rotation', getRandomBirdRotation());
  },

  tick: function (t, dt) {

    this.throttledFunction();

    // https://stackoverflow.com/questions/48726018/a-frame-move-forward-in-camera-direction
    var angle = this.el.getAttribute("rotation");

    let theta = (angle.x * Math.PI / 180) + Math.PI / 2;
    let fi = angle.y * Math.PI / 180;
    let r = 0.1;
    let z = Math.sin(theta) * Math.cos(fi) * r;
    let x = Math.sin(theta) * Math.sin(fi) * r;
    let y = Math.cos(theta) * r;

    this.el.object3D.position.x += x * 0.25;
    this.el.object3D.position.y += y * 0.25;
    this.el.object3D.position.z += z * 0.25;

    if(this.el.object3D.position.x > 15 || this.el.object3D.position.x < -15 || this.el.object3D.position.z > 15 || this.el.object3D.position.z < -15){
      this.el.parentNode.removeChild(this.el);

      let sceneEl = document.querySelector('a-scene');
      var newBird = document.createElement('a-entity');
      newBird.setAttribute('mixin', 'bird');
      newBird.setAttribute('bird', '');
      newBird.setAttribute('class', 'clickable');
      sceneEl.appendChild(newBird);
    }
  },

  remove: function () {
    // this.el.emit('increment');
    this.el.removeObject3D('bird');
  }

});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomBirdPosition() {
  var pos = '';
  pos += Math.floor(getRandomIntInclusive(-8, 8)).toString();
  pos += ' ';
  pos += Math.floor(getRandomIntInclusive(3, 8)).toString();
  pos += ' ';
  pos += Math.floor(getRandomIntInclusive(-8, 8)).toString();
  // console.log(pos);
  return pos;
}

function getRandomBirdRotation() {
  var rot = '';
  rot += Math.floor(getRandomIntInclusive(0, 0)).toString();
  rot += ' ';
  rot += Math.floor(getRandomIntInclusive(0, 360)).toString();
  rot += ' ';
  rot += Math.floor(getRandomIntInclusive(0, 0)).toString();
  // console.log(rot);
  return rot;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}