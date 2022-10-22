import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'

import '@babylonjs/core/Rendering/boundingBoxRenderer'
import { BoundingInfo } from '@babylonjs/core/Culling/boundingInfo'

import '@babylonjs/loaders/glTF/2.0/glTFLoader'
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader'

import { scene, engine } from './main.js'

const dim = [...'xyz']
const rand = () => Math.random() - 0.5

const bounds = new Mesh('bounds', scene)
bounds.setBoundingInfo(new BoundingInfo(new Vector3(-3, -2, -2), new Vector3(3, 2, 2)))
// bounds.showBoundingBox = true

window.addEventListener('click', () => {
	bounds.showBoundingBox = !bounds.showBoundingBox
})

/** @param {BoundingInfo} boundingInfo */
const getBounds = (boundingInfo) => {
	const { minimumWorld, maximumWorld } = boundingInfo.boundingBox
	return [minimumWorld, maximumWorld]
}

SceneLoader.ImportMeshAsync('', import.meta.env.BASE_URL, 'dvd.gltf').then(async ({ meshes }) => {
	/** @type {Color3} */
	const dvdColor = meshes[1].material.emissiveColor

	const [mMin, mMax] = meshes.reduce((ms, m) => {
		const [min, max] = getBounds(m.getBoundingInfo())
		return [Vector3.Minimize(ms[0], min), Vector3.Maximize(ms[1], max)]
	}, [Vector3.Zero(), Vector3.Zero()])

	const group = meshes[0]
	group.setBoundingInfo(new BoundingInfo(mMin, mMax))
	// meshes[0].showBoundingBox = true

	const box = bounds.getBoundingInfo()
	const boxMax = box.boundingBox.maximumWorld.scale(0.975)
	const boxMin = box.boundingBox.minimumWorld.scale(0.975)

	const velocity = new Vector3(-0.02 + rand() * 0.005, 0.01 + rand() * 0.001, 0.01)

	engine.runRenderLoop(() => {
		group.position.addInPlace(velocity)
		const [minW, maxW] = getBounds(group.getBoundingInfo())
		if (!box.intersectsPoint(minW) || !box.intersectsPoint(maxW)) {
			Color3.HSVtoRGBToRef(Math.random() * 360, 1, 0.5, dvdColor)
			const minE = boxMin.subtract(minW).maximizeInPlaceFromFloats(0, 0, 0)
			const maxE = maxW.subtract(boxMax).maximizeInPlaceFromFloats(0, 0, 0)
			group.position.addInPlace(minE).subtractInPlace(maxE)
			for (const d of dim) {
				if (maxE[d] < 1e-15 && minE[d] < 1e-15) continue
				velocity[d] = -velocity[d]
			}
		}
		scene.render()
	})
})