import { OrbitControls } from '../lib/OrbitControls.js';

function init_scene() {
  return new THREE.Scene();
}

function init_camera(camera_config) {
  // camera_config:{
  //   fov: Number => Flied of View
  //   near: Number => Nearest point to render
  //   far: Number => Farest point to render
  // }

  return new THREE.PerspectiveCamera(
    camera_config.fov,
    window.innerWidth / window.innerHeight,
    camera_config.near,
    camera_config.far
  );
}

function init_renderer(renderer_config = {}) {
  // renderer_config:{
  //   config: Object => Config object to pass in WebGLRenderer()
  //   shadow: Boolean => Render shadows
  // }

  let renderer = null;

  if (renderer_config.config) renderer = new THREE.WebGLRenderer(renderer_config.config);
  else renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  if (renderer_config.config.alpha) renderer.setClearColor(0x000000, 0);

  if (renderer_config.shadows) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  document.body.appendChild(renderer.domElement);

  return renderer;
}

function init_controls(camera, renderer) {
  return new OrbitControls(camera, renderer.domElement);
}

function init_three(config) {
  const scene = init_scene();
  const camera = init_camera(config.camera);
  const renderer = init_renderer(config.renderer);
  const controls = init_controls(camera, renderer);

  return [scene, camera, renderer, controls];
}

export { init_three };
