// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.146.0/three.min.js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
console.log(scene);
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

const loader = new GLTFLoader();
let car;
// const loader = new GLTFLoader();
loader.load('shelby-cobra-427/source/shelby-cobra-427.glb', function ( gltf ) {

    car = gltf.scene;  // sword 3D object is loaded
    car.scale.set(2, 2, 2);
    car.position.y = 4;
    scene.add(car);
}, undefined, function ( error ) {
    console.error( error );
} );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var geometry =  new THREE.BoxGeometry(3, 1, 3, 10, 10, 10);
// var material = new THREE.MeshBasicMaterial( {
// 	opacity: 0.5,
// 	transparent: true,
// 	color: 0xA765C9,
// 	wireframe: true,
// });
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 1;

var animate = function () {
    requestAnimationFrame( animate );
    // cube.rotation.y += -0.005
    renderer.render( scene, camera );
};
