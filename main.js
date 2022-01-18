import { init_three } from './js/config.js';
import { generatePlanet } from './js/objects.js';
import { planetsRotation, planetsOrbit } from './js/actions.js';

const PLANET_LIST = [
  {
    name: 'sun',
    radius: 696340.0,
    has_texture: true,
    texture: './js/texture/sun.jpg',
  },
  {
    name: 'mercury',
    radius: 2439.76,
    has_texture: true,
    texture: './js/texture/mercury.jpg',
  },
  {
    name: 'venus',
    radius: 6051.59,
    has_texture: true,
    texture: './js/texture/venus.jpg',
  },
  {
    name: 'earth',
    radius: 6378.15,
    has_texture: true,
    texture: './js/texture/earth.jpg',
  },
];

function main() {
  const THREE_CONFIG = {
    camera: { fov: 75, near: 0.1, far: 3000 },
    renderer: { shadows: true, config: { alpha: true } },
  };

  const [SCENE, CAMERA, RENDERER, CONTROLS] = init_three(THREE_CONFIG);

  PLANET_LIST.forEach((planet) => {
    SCENE.add(generatePlanet(planet));
  });

  CAMERA.position.z = 2000;

  function animate() {
    requestAnimationFrame(animate);

    planetsRotation(SCENE);
    planetsOrbit(SCENE, PLANET_LIST.filter((x) => x.name === 'sun')[0].radius);

    CONTROLS.update();
    RENDERER.render(SCENE, CAMERA);
  }
  animate();
}

main();
