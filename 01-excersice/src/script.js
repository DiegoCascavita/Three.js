import * as THREE from 'three'
console.log(THREE)

//scene
const scene = new THREE.Scene()

//Red cube
//size (1,1,1) equals size
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: "red"})
//A mesh object is made up of a geometry and a material. Twelve different geometries are available under "Select Object." 
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


//Sizes
const sizes = {
    width: 800,
    height: 600
}


// Camera
//(75 FOV, sizes)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


//renderer & canvas
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas 
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)