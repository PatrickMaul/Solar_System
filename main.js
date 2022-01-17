import { init_three } from './js/config.js';
import { generatePlanets } from './js/objects.js';
import { planetsRotation, planetsOrbit } from './js/actions.js';

const planet_list = {
  sun: {
    name: 'sun',
    radius: 696340.0,
    has_texture: true,
    texture: './js/texture/sun.jpg',
  },
  mercury: {
    name: 'mercury',
    radius: 2439.76,
    has_texture: true,
    texture: './js/texture/mercury.jpg',
  },
};

function main() {
  const [scene, camera, renderer, controls] = init_three({
    camera: { fov: 75, near: 0.1, far: 3000 },
    renderer: { shadows: true, config: { alpha: true } },
  });

  scene.add(generatePlanets(planet_list.sun));
  scene.add(generatePlanets(planet_list.mercury));

  camera.position.z = 2000;

  function animate() {
    requestAnimationFrame(animate);

    planetsRotation(scene);
    planetsOrbit(scene);

    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

main();
