import * as THREE from 'three';
import earthMap from '../assets/earthMap.jpg';

const earth = () => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(12, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.set(0, 0, 0)
    camera.lookAt(scene.position)

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#earth-container'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);

    renderer.render(scene, camera);

    //* Spotlight
    const spotlightColor = "#ffffff"
    const spotlight = new THREE.SpotLight(spotlightColor)
    spotlight.position.set(-15, 10, 20)
    spotlight.shadow.camera.near = 2
    spotlight.shadow.camera.far = 200
    spotlight.shadow.camera.fov = 20
    spotlight.distance = 0
    spotlight.angle = 0.8
    scene.add(spotlight)
    //const controls = new OrbitControls(camera, renderer.domElement);

    //* Earth
    const earthTexture = new THREE.TextureLoader().load(earthMap);
    const earth = new THREE.Mesh(
        new THREE.SphereGeometry(3.1, 32, 32),
        new THREE.MeshStandardMaterial({
            map: earthTexture,
        })
    );
    scene.add(earth);
    earth.position.set(1, 0, 0);
    


    function animate() {
        requestAnimationFrame(animate);
        earth.rotation.y += 0.005;
        renderer.render(scene, camera);
    }

    animate();
}

export default earth;