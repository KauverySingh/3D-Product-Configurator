// main.js

// Basic scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load 3D model
const loader = new THREE.GLTFLoader();
let table;

loader.load('path/to/WorkTest-Table.glb', (gltf) => {
    table = gltf.scene;
    scene.add(table);
});
// main.js

// Assuming you have color pickers with IDs 'tableTopColor' and 'tableLegColor'
const tableTopColorPicker = document.getElementById('tableTopColor');
const tableLegColorPicker = document.getElementById('tableLegColor');

tableTopColorPicker.addEventListener('input', (event) => {
    const color = new THREE.Color(event.target.value);
    table.traverse((child) => {
        if (child.isMesh) {
            child.material.color = color;
        }
    });
});

tableLegColorPicker.addEventListener('input', (event) => {
    const color = new THREE.Color(event.target.value);
    // Similar to table top customization
});
