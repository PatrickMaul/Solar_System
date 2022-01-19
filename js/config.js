import { OrbitControls } from '../lib/OrbitControls.js';

/**
 * Initialize THREE.Scene
 *
 * @returns {object} Scene
 */
function init_scene() {
  return new THREE.Scene();
}

/**
 * Initialize THREE.PerspectiveCamera
 *
 * @param {object} camera_config Cam config object, contains fov, near and far (each is a Number)
 * @returns {object} PerspectiveCamera
 */
function init_camera(camera_config) {
  if (!camera_config) return;

  const camera = new THREE.PerspectiveCamera(
    camera_config.fov,
    window.innerWidth / window.innerHeight,
    camera_config.near,
    camera_config.far
  );

  if (camera_config.position) {
    camera.position.x = camera_config.position.x;
    camera.position.y = camera_config.position.y;
    camera.position.z = camera_config.position.z;
  }

  if (camera_config.rotation) {
    camera.rotation.x = camera_config.rotation.x;
    camera.rotation.y = camera_config.rotation.y;
    camera.rotation.z = camera_config.rotation.z;
  }

  return camera;
}

/**
 * Initialize THREE.WebGLRenderer
 *
 * @param {object} renderer_config Renderer config object. Contains config (Object), shadow (Boolean)
 * @returns {object} WebGLRenderer
 */
function init_renderer(renderer_config = {}) {
  let renderer = null;

  if (renderer_config.config) renderer = new THREE.WebGLRenderer(renderer_config.config);
  else renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  //  transparent background
  if (renderer_config.config.alpha) renderer.setClearColor(0x000000, 0);

  //  allow shadows
  if (renderer_config.shadows) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  document.body.appendChild(renderer.domElement);

  return renderer;
}

/**
 * Initialize OrbitControls.
 * Depending on the need of the camera and renderer, this need to be initialized after them.
 *
 * @param {object} camera Camera object
 * @param {object} rendereDomElement DOM element from renderer
 * @returns {object} controls
 */
function init_controls(camera, renderer) {
  return new OrbitControls(camera, renderer.domElement);
}

/**
 * Initialize Three.js
 * Creating a scene, the camera and the session.
 * Config object is needs at least the camera-configuration object.
 *
 * camera: {
 *   fov: Number => Field of View,
 *   near: Number => The nearest point the camera will render,
 *   far: Number => The farest point the camera will render
 * }
 *
 * renderer: {
 *   config: Object => Three.js config from renderer => go to three.js documentation,
 *   shadow: Boolean => Allow render shadows
 * }
 *
 * @param {object} config Config object. Camera config and renderer config.
 * @returns {[object]} Array of scene, camera, renderer and controls
 */
function init_three(config) {
  const scene = init_scene();
  const camera = init_camera(config.camera);
  const renderer = init_renderer(config.renderer);

  const controls = init_controls(camera, renderer);

  return [scene, camera, renderer, controls];
}

function generateBackground(scence) {
  const geometry = new THREE.SphereGeometry(3000, 30, 30);

  let material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('./js/texture/stars_milky_way.jpg'),
    side: THREE.BackSide,
  });

  let mesh = new THREE.Mesh(geometry, material);
  scence.add(mesh);
}

export { init_three, generateBackground };
