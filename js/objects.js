function generatePlanet(planet) {
  // planet:{
  //   name: String => name of the planet, needs for identification => should be unique
  //   radius: Number => raduis in km
  //   has_texture: Boolean => is thre a texture to load
  //     texture: String => path to texture
  //     material: Object => Material config
  // }

  const RADIUS = planet.radius / 900;

  const GEOMETRY = new THREE.SphereGeometry(RADIUS, 1024, 1024);

  let material = null;
  if (planet.has_texture) {
    const TEXTURE = new THREE.TextureLoader().load(planet.texture);
    if (planet.name != 'sun') material = new THREE.MeshLambertMaterial({ map: TEXTURE });
    else material = new THREE.MeshBasicMaterial({ map: TEXTURE });
  } else new THREE.MeshBasicMaterial(planet.material);

  const MESH = new THREE.Mesh(GEOMETRY, material);

  MESH.name = planet.name;

  return MESH;
}

export { generatePlanet };
