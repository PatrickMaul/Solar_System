function planetsRotation(scene) {
  scene.getObjectByName('sun').rotation.y += 0.001;
}

function planetsOrbit(scene) {
  scene.getObjectByName('sun').position.x = 100 * Math.cos(Date.now() * 0.0001);
  scene.getObjectByName('sun').position.z = 100 * Math.sin(Date.now() * 0.0001);
}

export { planetsRotation, planetsOrbit };
