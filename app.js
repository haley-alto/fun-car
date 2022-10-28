// Option 1: Import the entire three.js core library.
import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
//     requestAnimationFrame( animate );

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render( scene, camera );
// };

// animate();

//this.animate(null);
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
boxGeometry = new THREE.BoxGeometry(2, 2, 2);
material = new THREE.MeshBasicMaterial({color: 0xff0000});
mesh = new THREE.Mesh( boxGeometry, material );
  canva = document.getElementById("canvas");
     renderer = new THREE.WebGLRenderer({antialias: true, canvas: canva });

startScene();
animate();

function startScene() {

  //let scene = new THREE.Scene();
  //let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  let light = new THREE.AmbientLight( 0xffaaff ); 
 

    scene.add( mesh );
    light.position.set(10,10,10)
    scene.add( light );
    camera.position.set(0, 0, 5);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    //this.renderer.setClearColor('#E5E5E5')
    renderer.setClearColor(0xEEEEEE);
    //this.renderer.setSize(window.innerWidth, window.innerHeight)
    //this.renderer.render(this.scene, this.camera)
    //this.renderer.setAnimationLoop(this.animate.bind(this))
    //document.body.appendChild(this.renderer.domElement)

    // window.addEventListener('resize', () => {
    //   this.renderer.setSize(window.innerWidth, window.innerHeight)
    //   this.camera.aspect = window.innerWidth / innerHeight
    //   this.camera.updateProjectionMatrix();
    // })
} 

function animate() {
 camera.aspect = window.innerWidth / innerHeight
    camera.updateProjectionMatrix();
    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    //this.mesh.rotation.y += 1;
    //document.body.appendChild(this.renderer.domElement)

    renderer.render(scene, camera);
}
