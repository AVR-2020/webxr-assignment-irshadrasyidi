// https://glitch.com/~random-cubes
AFRAME.registerComponent('rocks', {

  init: function(){
    
    //console.log('tree-man');
    let count = 2;
    let rock_types = [
      'Assets/Models/Envs/rock1.glb',
      'Assets/Models/Envs/rock2.glb'
    ];
    let rocks = [];
    let sceneEl = document.querySelector('a-scene');
    
    for (let i=-50; i<=50; i+=5){
      for (let j=-50; j<=50; j+=100){
        var pos = '';
        rocks[i] = document.createElement('a-entity');
        rocks[i].setAttribute('id', 'rock_'+i+j.toString());
  
        let selected_rock = getRandomIntInclusive(0, 1);
        rocks[i].setAttribute('gltf-model', rock_types[0]);
        rocks[i].setAttribute('static-body', 'shape: cylinder;');
        rocks[i].setAttribute('rotation', getRandomTreeRotation());
        rocks[i].setAttribute('scale', getRandomRockScale());

        pos += i;
        pos += ' 0.5 ';
        pos += j;
        rocks[i].setAttribute('position', pos);
  
        sceneEl.appendChild(rocks[i]);
      }
    }

    for (let i=-50; i<=50; i+=5){
      for (let j=-50; j<=50; j+=100){
        var pos = '';
        rocks[i] = document.createElement('a-entity');
        rocks[i].setAttribute('id', 'rock_'+i+j.toString());
  
        let selected_rock = getRandomIntInclusive(0, 1);
        rocks[i].setAttribute('gltf-model', rock_types[0]);
        rocks[i].setAttribute('static-body', 'shape: cylinder;');
        rocks[i].setAttribute('rotation', getRandomTreeRotation());
        rocks[i].setAttribute('scale', getRandomRockScale());

        pos += j;
        pos += ' 0.5 ';
        pos += i;
        rocks[i].setAttribute('position', pos);
  
        sceneEl.appendChild(rocks[i]);
      }
    }

  }
});

function getRandomRockScale() {
  var scl = '';
  scl += '1 ';
  scl += Math.floor(getRandomIntInclusive(1, 3)).toString();
  scl += ' 1';
  return scl;
}