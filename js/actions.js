function planetsRotation(scene) {
  scene.getObjectByName('sun').rotation.y += 0.001;
  scene.getObjectByName('sun').rotation.y += 0.001;
}

function planetsOrbit(scene) {
  scene.getObjectByName('mercury').position.x = 1000 * Math.cos(Date.now() * 0.001);
  scene.getObjectByName('mercury').position.z = 1000 * Math.sin(Date.now() * 0.001);
}

export { planetsRotation, planetsOrbit };
