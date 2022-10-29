import * as THREE from 'three';
// import { GLTFLoader} from 'https://unpkg.com/three@0.146.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// const hlight = new AmbientLight (0x404040,100);
// const container = document.querySelector('#scene-container');
var scene, camera, renderer, cube, controls;

init();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const square = new THREE.BoxGeometry(1,0.1,1);
    const lightSquare = new THREE.MeshBasicMaterial({ color: 0xE0C4A8});
    const darkSquare = new THREE.MeshBasicMaterial({ color: 0x6A4236});

    let board = new THREE.Group();

    for (let x = 1; x <= 10; x++) {
        for (let z = 1; z <= 10; z++){
            if(z % 2 === 0) {
                cube = new THREE.Mesh(square, x % 2 === 0 ? lightSquare : darkSquare);
            } else {
                cube = new THREE.Mesh(square, x % 2 === 0 ? darkSquare : lightSquare);
            }
            cube.position.set(x,0,z);
            board.add(cube);
        }
    }

    scene.add(board);

    const loader = new GLTFLoader();
    loader.load('checker.glb', function (gltf) {

        gltf.scene.scale.set(gltf.scene.scale.x * 0.4, gltf.scene.scale.y * 0.2, gltf.scene.scale.z * 0.4);
        gltf.scene.position.y += gltf.scene.scale.y;
        gltf.scene.position.x = 1;
        gltf.scene.position.z = 1;

        scene.add(gltf.scene);
        // const puckMesh = gltf.scene.children.find((child) => child.name === "puck");
        // puckMesh.scale.set(puckMesh.scale.x * 0.4, )
        // puckMesh.scale.set(puckMesh.scale.x * 0.4, puckMesh.scale.y * 0.4, puckMesh.scale.z * 0.4);
        // puckMesh.position.y += puckMesh.scale.y;
        // scene.add(puckMesh);
    });

    const light = new THREE.PointLight(0xffffff, 2, 200);
    light.position.set(100,0,4.5);
    scene.add(light);

    camera.position.y = 1;
    camera.position.z = 3;
    // camera.lookAt(0,0,0);

    controls = new OrbitControls(camera, renderer.domElement);

    controls.target.set(4.5,0,4.5); //this sets the camera on oribit controls
    controls.enablePan = false; //horitonzal scrolling
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableDamping = true;

    // controls.update();

    window.requestAnimationFrame(animate);
}

function animate() {
    controls.update();
    renderer.render( scene, camera );
    window.requestAnimationFrame( animate );
}
