import { init_three } from './js/config.js';
import { planetsRotation, planetsOrbit } from './js/actions.js';
import { Planet } from './js/Planet.js';

const planetConfig = [
  {
    name: 'sun',
    radiusInKilometer: 696340.0,
    texturePath: './js/texture/sun.jpg',
    rotationSpeed: 0.001,
  },
  {
    name: 'mercury',
    radiusInKilometer: 2439.76,
    texturePath: './js/texture/mercury.jpg',
    rotationSpeed: 0.0001,
  },
  {
    name: 'venus',
    radiusInKilometer: 6051.59,
    texturePath: './js/texture/venus.jpg',
    rotationSpeed: 0.0001,
  },
  {
    name: 'earth',
    radiusInKilometer: 6378.15,
    texturePath: './js/texture/earth.jpg',
    rotationSpeed: 0.0001,
  },
];

let planets = {};

function main() {
  const THREE_CONFIG = {
    camera: { fov: 75, near: 0.1, far: 3000 },
    renderer: { shadows: true, config: { alpha: true } },
  };

  const [scene, CAMERA, RENDERER, CONTROLS] = init_three(THREE_CONFIG);

  planetConfig.forEach((planet) => {
    planets[planet.name] = new Planet(planet);
    planets[planet.name].addMeshToScene(scene);
  });

  CAMERA.position.z = 2000;

  function animate() {
    requestAnimationFrame(animate);

    planetsRotation(planets, scene);
    // planetsOrbit(scene, planetConfig.filter((x) => x.name === 'sun')[0].radius);

    CONTROLS.update();
    RENDERER.render(scene, CAMERA);
  }
  animate();
}

main();
