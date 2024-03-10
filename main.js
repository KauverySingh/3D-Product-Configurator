// main.js

// Basic scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('model-container').appendChild(renderer.domElement);

// Load 3D model using FBXLoader
const loader = new THREE.FBXLoader();
let table;

loader.load('table.fbx', (fbx) => {
    table = fbx;
    scene.add(table);
});

// Assuming you have color pickers with IDs 'tableTopColor' and 'tableLegColor'
const tableTopColorPicker = document.getElementById('tableTopColor');
const tableLegColorPicker = document.getElementById('tableLegColor');
// const tableTextureSelector = document.getElementById('tableTexture');

tableTopColorPicker.addEventListener('input', (event) => {
    const color = new THREE.Color(event.target.value);
    applyColorToModel(color);
});

tableLegColorPicker.addEventListener('input', (event) => {
    const color = new THREE.Color(event.target.value);
    applyColorToModel(color);
});

// tableTextureSelector.addEventListener('change', () => {
//     const textureURL = tableTextureSelector.value;
//     applyTextureToModel(textureURL);
// });

function applyColorToModel(color) {
    if (table) {
        table.traverse((child) => {
            if (child.isMesh) {
                child.material.color = color;
            }
        });
    }
}

// function applyTextureToModel(textureURL) {
//     if (table) {
//         const textureLoader = new THREE.TextureLoader();
//         textureLoader.load(textureURL, (texture) => {
//             table.traverse((child) => {
//                 if (child.isMesh) {
//                     child.material.map = texture;
//                     child.material.needsUpdate = true;
//                 }
//             });
//         });
//     }
// }

// Add any other customization or controls you need
