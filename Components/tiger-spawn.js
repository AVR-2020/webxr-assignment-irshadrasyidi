AFRAME.registerComponent('tiger-spawn', {
  schema: {
    status: { type: "string", default: "start" },
  },

  init: function () {
    this.throttledFunction = AFRAME.utils.throttle(this.spawn, getRandomIntInclusive(15000, 40000), this);

    this.el.setAttribute('sound', {
      src: '#ouch',
      loop: false,
      volume: 0.5,
      positional: false,
      autoplay: false
    });
  },

  tick: function (t, dt) {
    this.throttledFunction();
    if (AFRAME.scenes[0].systems.state.state.score > 0) {
      this.data.status = "ongoing";
    }
    else {
      this.data.status = "start";
    }
    // console.log(this.data.status);
  },

  spawn: function () {
    if (this.data.status == "ongoing") {
      let sceneEl = document.querySelector('a-scene');
      var newTiger = document.createElement('a-entity');
      newTiger.setAttribute('id', 'tiger');
      newTiger.setAttribute('position', getRandomTigerPosition());
      newTiger.setAttribute('mixin', 'tiger');
      newTiger.setAttribute('tiger', '');
      newTiger.setAttribute('sound', {
        src: '#roar',
        autoplay: true,
        loop: true
      });
      newTiger.setAttribute('look-at', '#player');
      newTiger.setAttribute('class', 'clickable');
      sceneEl.appendChild(newTiger);
    }

  },
});