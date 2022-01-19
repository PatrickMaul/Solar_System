export class Planet {
  constructor(planet) {
    this.name = planet.name || null;
    this.radiusInKilometer = planet.radiusInKilometer || null;
    this.renderRadius = planet.radiusInKilometer / 900 || null;
    this.texturePath = planet.texturePath || null;
    this.materialColor = planet.materialColor || null;
    this.rotationInDays = planet.rotationInDays || null;
    this.distanceToSun = planet.distanceToSun || null;
    this.orbitalSpeed = planet.orbitalSpeed || null;

    this.geometry = new THREE.SphereGeometry(this.renderRadius, 1024, 1024);

    if (this.texturePath) {
      this.texture = new THREE.TextureLoader().load(this.texturePath);
      if (this.name != 'sun') this.material = new THREE.MeshBasicMaterial({ map: this.texture });
      else this.material = new THREE.MeshBasicMaterial({ map: this.texture });
    }

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.mesh.name = this.name;
  }

  get getName() {
    return this.name;
  }
  get getRadiusInKilometer() {
    return this.radiusInKilometer;
  }
  get getRenderRadius() {
    return this.renderRadius;
  }
  get getTexturePath() {
    return this.texturePath;
  }
  get getMaterialColor() {
    return this.materialColor;
  }
  get getrotationInDays() {
    return this.rotationInDays;
  }
  get getDistanceToSun() {
    return this.distanceToSun;
  }
  get getOrbitalSpeed() {
    return this.orbitalSpeed;
  }

  get getGeometry() {
    return this.geometry;
  }
  get getTexture() {
    return this.texture;
  }
  get getMaterial() {
    return this.material;
  }
  get getMesh() {
    return this.mesh;
  }

  addMeshToScene(scene) {
    scene.add(this.mesh);
  }
  setPosition(sun) {
    this.mesh.position.x = sun.getRenderRadius() + this.getDistanceToSun();
  }
}
