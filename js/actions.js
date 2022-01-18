function planetsRotation(planets, scene) {
  for (const planetName in planets) {
    if (Object.hasOwnProperty.call(planets, planetName)) {
      const planet = planets[planetName];
      scene.getObjectByName(planetName).rotation.y += planet.rotationSpeed;
    }
  }
}

function planetsOrbit(scene, sun_radius) {
  const SUN_DISTANCE = sun_radius / 900;

  scene.getObjectByName('mercury').position.x = (SUN_DISTANCE + 100) * Math.cos(Date.now() * 0.001);
  scene.getObjectByName('mercury').position.z = (SUN_DISTANCE + 100) * Math.sin(Date.now() * 0.001);

  scene.getObjectByName('venus').position.x = (SUN_DISTANCE + 200) * Math.cos(Date.now() * 0.001);
  scene.getObjectByName('venus').position.z = (SUN_DISTANCE + 200) * Math.sin(Date.now() * 0.001);

  scene.getObjectByName('earth').position.x = (SUN_DISTANCE + 300) * Math.cos(Date.now() * 0.001);
  scene.getObjectByName('earth').position.z = (SUN_DISTANCE + 300) * Math.sin(Date.now() * 0.001);
}

export { planetsRotation, planetsOrbit };
