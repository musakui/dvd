import {
  Scene,
  Vector3,
  WebGLRenderer,
  MeshBasicMaterial,
  PerspectiveCamera,
} from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const dims = ['x', 'y', 'z']
const rand = () => Math.random() - 0.5

const loader = new GLTFLoader()
const renderer = new WebGLRenderer({ antialias: true })

const scene = new Scene()
const camera = new PerspectiveCamera(50, 1, 0.1, 100)
camera.position.set(0, 0, 4)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
controls.enableKeys = false
controls.minDistance = 3
controls.maxDistance = 6
controls.maxAzimuthAngle = Math.PI / 2
controls.minAzimuthAngle = -Math.PI / 2

const velocity = new Vector3(rand(), rand(), rand())
velocity.normalize()

const material = new MeshBasicMaterial({ color: 0xFFFFFF })

const boxSize = new Vector3(1.5, 1, 0.5)

let logo
let last = 0
render(0)
onResize()
window.addEventListener('resize', onResize, false)
document.body.appendChild(renderer.domElement)

loader.load('dvd.glb', (data) => {
  logo = data.scene.children[0]
  logo.position.set(0, 0, 0)
  logo.children.forEach((m) => {
    m.material = material
    m.position.y -= 0.2
  })
  scene.add(logo)
})

function render (time) {
  const delta = time - last

  let hit = false
  if (logo) {
    logo.position.addScaledVector(velocity, delta / 2000)
    for (const d of dims) {
      const side = boxSize[d]
      const pos = logo.position[d]
      if (Math.abs(pos) < side) { continue }
      logo.position[d] = Math.max(-side, Math.min(side, pos))
      velocity[d] = -velocity[d]
      hit = true
    }
  }

  if (hit) {
    material.color.setHSL(Math.random(), 1, 0.5)
  }

  renderer.render(scene, camera)
  last += delta
  requestAnimationFrame(render)
}

function onResize () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
