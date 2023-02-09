import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

//Group container of objects
const group = new THREE.Group()
scene.add(group)
group.position.set(1, 2, 0)
group.rotation.set(1,1,2)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "blue"})
)
group.add(cube1)


const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
//position
// mesh.position.x = 2
// mesh.position.y = -0.6
// mesh.position.z = -2
//or
mesh.position.set (2, -0.6, -2)
//Scale
mesh.scale.x = 2
mesh.scale.y = 1
mesh.scale.z = 1
//Rotation
mesh.rotation.reorder ('XYZ')//AXES ORDER
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = 1
mesh.rotation.z = 1


//AXES helper
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper)
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1
scene.add(camera)
//
// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
