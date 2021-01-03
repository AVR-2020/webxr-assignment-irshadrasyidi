AFRAME.registerComponent('tiger', {
  schema: {
    speed: {
      type: 'number',
      default: 1.5
    }
  },
  // dependencies: ['position'],
  
  init: function () {
    this.el.setAttribute('position', getRandomTigerPosition());
    this.el.addEventListener('click', function(ev) {
      this.remove();
    });
  },

  tick: function (t, dt) {

    // https://stackoverflow.com/questions/53571457/make-an-object-chase-another-object
    var target = this.el.sceneEl.querySelector('#player');
    var vec3 = new THREE.Vector3();
    var currentPosition = this.el.object3D.position;
    vec3 = this.el.object3D.worldToLocal(target.object3D.position.clone())
    var distance = dt*this.data.speed / 1000;      
    var camFromOrca = currentPosition.distanceTo( target.object3D.position );
    if (camFromOrca > 1.5) {
      this.el.object3D.translateOnAxis(vec3, distance);
    }
    else if (camFromOrca <= 1.5) {
      AFRAME.scenes[0].emit('decreaseScore', {points: 25});
      this.el.parentNode.removeChild(this.el);
    }
  }

});

function getRandomTigerPosition() {
  var pos = '';
  pos += Math.floor(getRandomIntInclusive(-30, 30)).toString();
  pos += ' ';
  pos += Math.floor(getRandomIntInclusive(0, 0)).toString();
  pos += ' ';
  pos += Math.floor(getRandomIntInclusive(-30, 30)).toString();
  // console.log(pos);
  return pos;
}

function getRandomTigerRotation() {
  var rot = '';
  rot += Math.floor(getRandomIntInclusive(0, 0)).toString();
  rot += ' ';
  rot += Math.floor(getRandomIntInclusive(0, 360)).toString();
  rot += ' ';
  rot += Math.floor(getRandomIntInclusive(0, 0)).toString();
  // console.log(rot);
  return rot;
}