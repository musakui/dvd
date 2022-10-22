import { Engine } from '@babylonjs/core/Engines/engine'

import { Scene } from '@babylonjs/core/scene'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'

export const canvas = document.querySelector('canvas')
export const engine = new Engine(canvas, true)

export const scene = new Scene(engine)
scene.clearColor = Color3.Black()

export const camera = new ArcRotateCamera('cam', 1.57, 1.5, 5, Vector3.Zero(), scene)
Object.assign(camera, {
	lowerRadiusLimit: 3,
	upperRadiusLimit: 7,
	lowerBetaLimit: 1,
	upperBetaLimit: 2,
	panningSensibility: 0,
})
camera.inputs.remove(camera.inputs.attached.keyboard)
camera.attachControl(canvas, true)

engine.resize()
window.addEventListener('resize', () => engine.resize(), { passive: true })

import('./load.js')