function generatePlanets(planet) {
  // planet:{
  //   name: String => name of the planet, needs for identification => should be unique
  //   radius: Number => raduis in km
  //   has_texture: Boolean => is thre a texture to load
  //     texture: String => path to texture
  //     material: Object => Material config
  // }

  const radius = planet.radius / 2000;

  const geometry = new THREE.SphereGeometry(radius, 1024, 1024);

  let material = null;
  if (planet.has_texture) {
    const texture = new THREE.TextureLoader().load(planet.texture);
    material = new THREE.MeshBasicMaterial({ map: texture });
  } else new THREE.MeshBasicMaterial(planet.material);

  const mesh = new THREE.Mesh(geometry, material);

  mesh.name = planet.name;

  return mesh;
}

export { generatePlanets };
