import { generateBackground, init_three } from './js/config.js';
import { planetsRotation, planetsOrbit } from './js/actions.js';
import { Planet } from './js/Planet.js';

let planets = {};
const planetConfig = [
  {
    name: 'sun',
    radiusInKilometer: 696340.0,
    texturePath: './js/texture/sun.jpg',
    rotationInDays: 25.38,
  },
  {
    name: 'mercury',
    radiusInKilometer: 2439.76,
    texturePath: './js/texture/mercury.jpg',
    rotationInDays: 58.646225,
    distanceToSun: 100,
    orbitalSpeed: 0.2408467,
  },
  {
    name: 'venus',
    radiusInKilometer: 6051.59,
    texturePath: './js/texture/venus.jpg',
    rotationInDays: 243.0187,
    distanceToSun: 200,
    orbitalSpeed: 0.61519726,
  },
  {
    name: 'earth',
    radiusInKilometer: 6378.15,
    texturePath: './js/texture/earth.jpg',
    rotationInDays: 1,
    distanceToSun: 300,
    orbitalSpeed: 1,
  },
  {
    name: 'mars',
    radiusInKilometer: 3397,
    texturePath: './js/texture/mars.jpg',
    rotationInDays: 1.02595675,
    distanceToSun: 400,
    orbitalSpeed: 1.8808476,
  },
  {
    name: 'jupiter',
    radiusInKilometer: 71492.68,
    texturePath: './js/texture/jupiter.jpg',
    rotationInDays: 0.41354,
    distanceToSun: 600,
    orbitalSpeed: 11.862615,
  },
  {
    name: 'saturn',
    radiusInKilometer: 60267.14,
    texturePath: './js/texture/saturn.jpg',
    rotationInDays: 0.44401,
    distanceToSun: 800,
    orbitalSpeed: 29.447498,
  },
  {
    name: 'uranus',
    radiusInKilometer: 25559,
    texturePath: './js/texture/uranus.jpg',
    rotationInDays: 0.71833,
    distanceToSun: 1000,
    orbitalSpeed: 84.016846,
  },
  {
    name: 'neptune',
    radiusInKilometer: 24764,
    texturePath: './js/texture/neptune.jpg',
    rotationInDays: 0.67125,
    distanceToSun: 1200,
    orbitalSpeed: 164.79132,
  },
];
const config = {
  camera: { fov: 75, near: 0.1, far: 5000, position: { x: 0, y: 2000, z: 0 }, rotation: { x: 0, y: 2, z: 0 } },
  renderer: { shadows: true, config: { alpha: true } },
};

function main() {
  const keyboard = new THREEx.KeyboardState();
  const [scene, camera, renderer, controls] = init_three(config);

  generateBackground(scene);

  planetConfig.forEach((planet) => {
    planets[planet.name] = new Planet(planet);
    planets[planet.name].addMeshToScene(scene);
  });

  function animate() {
    requestAnimationFrame(animate);

    planetsRotation(planets, scene);
    planetsOrbit(planets, scene);

    // for (const planetName in planets) {
    //   if (Object.hasOwnProperty.call(planets, planetName)) {
    //     const planet = planets[planetName];
    //     if (planet.name === 'sun') continue;

    //     scene.getObjectByName(planetName).position.x = planets.sun.renderRadius + planet.distanceToSun;
    //   }
    // }

    if (keyboard.pressed('alt+shift')) {
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 2000;
      controls.target = new THREE.Vector3(
        scene.getObjectByName('sun').position.x,
        scene.getObjectByName('sun').position.y,
        scene.getObjectByName('sun').position.z
      );
    }
    if (keyboard.pressed('alt+0')) {
      camera.position.x = 0;
      camera.position.y = 2000;
      camera.position.z = 0;
      camera.rotation.y = 2;
      controls.target = new THREE.Vector3(
        scene.getObjectByName('sun').position.x,
        scene.getObjectByName('sun').position.y,
        scene.getObjectByName('sun').position.z
      );
    }
    if (keyboard.pressed('alt+1')) {
      const target = 'mercury';
      let sceneData = scene.getObjectByName(target);

      camera.position.x = sceneData.position.x;
      camera.position.y = sceneData.position.y;
      camera.position.z = sceneData.position.z - planets[target].renderRadius * 2;
      controls.target = new THREE.Vector3(sceneData.position.x, sceneData.position.y, sceneData.position.z);
    }
    if (keyboard.pressed('alt+2')) {
      const target = 'venus';
      let sceneData = scene.getObjectByName(target);

      camera.position.x = sceneData.position.x;
      camera.position.y = sceneData.position.y;
      camera.position.z = sceneData.position.z - planets[target].renderRadius * 2;
      controls.target = new THREE.Vector3(sceneData.position.x, sceneData.position.y, sceneData.position.z);
    }
    if (keyboard.pressed('alt+3')) {
      const target = 'earth';
      let sceneData = scene.getObjectByName(target);

      camera.position.x = sceneData.position.x;
      camera.position.y = sceneData.position.y;
      camera.position.z = sceneData.position.z - planets[target].renderRadius * 2;
      controls.target = new THREE.Vector3(sceneData.position.x, sceneData.position.y, sceneData.position.z);
    }
    if (keyboard.pressed('alt+4')) {
      const target = 'mars';
      let sceneData = scene.getObjectByName(target);

      camera.position.x = sceneData.position.x;
      camera.position.y = sceneData.position.y;
      camera.position.z = sceneData.position.z - planets[target].renderRadius * 2;
      controls.target = new THREE.Vector3(sceneData.position.x, sceneData.position.y, sceneData.position.z);
    }
    if (keyboard.pressed('alt+5')) {
      const target = 'jupiter';
      let sceneData = scene.getObjectByName(target);

      camera.position.x = sceneData.position.x;
      camera.position.y = sceneData.position.y;
      camera.position.z = sceneData.position.z - planets[target].renderRadius * 2;
      controls.target = new THREE.Vector3(sceneData.position.x, sceneData.position.y, sceneData.position.z);
    }
    if (keyboard.pressed('alt+6')) {
      const target = 'saturn';
      let sceneData = scene.getObjectByName(target);

      camera.position.x = sceneData.position.x;
      camera.position.y = sceneData.position.y;
      camera.position.z = sceneData.position.z - planets[target].renderRadius * 2;
      controls.target = new THREE.Vector3(sceneData.position.x, sceneData.position.y, sceneData.position.z);
    }
    if (keyboard.pressed('alt+7')) {
      const target = 'uranus';
      let sceneData = scene.getObjectByName(target);

      camera.position.x = sceneData.position.x;
      camera.position.y = sceneData.position.y;
      camera.position.z = sceneData.position.z - planets[target].renderRadius * 2;
      controls.target = new THREE.Vector3(sceneData.position.x, sceneData.position.y, sceneData.position.z);
    }
    if (keyboard.pressed('alt+8')) {
      const target = 'neptune';
      let sceneData = scene.getObjectByName(target);

      camera.position.x = sceneData.position.x;
      camera.position.y = sceneData.position.y;
      camera.position.z = sceneData.position.z - planets[target].renderRadius * 2;
      controls.target = new THREE.Vector3(sceneData.position.x, sceneData.position.y, sceneData.position.z);
    }

    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

main();
