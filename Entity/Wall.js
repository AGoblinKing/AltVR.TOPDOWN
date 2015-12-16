let materialCreator = new THREE.MTLLoader.MaterialCreator(),
    geom = new THREE.BoxGeometry(1, 1, 1),
    texture = materialCreator.loadTexture("Textures/hard.png"),
    mat  = new THREE.MeshBasicMaterial({ color : "#ffffff", map : texture });

class Wall extends THREE.Mesh {
     constructor(sim) {
        super(geom, mat);
    }
}

export default Wall;