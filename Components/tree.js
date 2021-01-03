// https://glitch.com/~random-cubes
AFRAME.registerComponent('trees', {

  init: function(){
    
    //console.log('tree-man');
    let count = 2;
    let tree_types = [
      'Assets/Models/Trees/monstera_tree/scene.gltf',
      'Assets/Models/Trees/old_tree/scene.gltf',
      'Assets/Models/Trees/tree/scene.gltf',
      'Assets/Models/Trees/tree_for_games/scene.gltf'
    ];
    let tree_scales = [
      '0.001 0.001 0.001',
      '1 1 1',
      '0.01 0.01 0.01',
      '0.005 0.005 0.005'
    ];
    let trees = [];
    let sceneEl = document.querySelector('a-scene');

    this.el.setAttribute('sound', {
      src: '#forest-ambient',
      loop: true,
      volume: 0.5,
      positional: false
    });
    
    for (let i=0; i<count; i++){
      trees[i] = document.createElement('a-entity');
      trees[i].setAttribute('id', 'tree_'+i.toString());

      let selected_tree = getRandomIntInclusive(0, 3);
      trees[i].setAttribute('gltf-model', tree_types[selected_tree]);
      trees[i].setAttribute('scale', tree_scales[selected_tree]);
      trees[i].setAttribute('static-body', 'shape: cylinder; width="5" ');
      trees[i].setAttribute('rotation', getRandomTreeRotation());
      trees[i].setAttribute('position', getRandomTreePosition());

      sceneEl.appendChild(trees[i]);
    }

  }
});

function getRandomTreePosition() {
  var pos = '';
  pos += Math.floor(getRandomIntInclusive(-15, 15)).toString();
  pos += ' ';
  pos += Math.floor(getRandomIntInclusive(0, 0)).toString();
  pos += ' ';
  pos += Math.floor(getRandomIntInclusive(-15, 15)).toString();
  // console.log(pos);
  return pos;
}

function getRandomTreeRotation() {
  var rot = '';
  rot += Math.floor(getRandomIntInclusive(0, 0)).toString();
  rot += ' ';
  rot += Math.floor(getRandomIntInclusive(0, 360)).toString();
  rot += ' ';
  rot += Math.floor(getRandomIntInclusive(0, 0)).toString();
  // console.log(rot);
  return rot;
}