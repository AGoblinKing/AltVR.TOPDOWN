import ChangeColor from "../Behavior/ChangeColor";

let CUBE_SCALE = 150;

class Cube extends THREE.Mesh {
    constructor(sim) {
        super(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color : "#ffffff" })
        );
        
        this.sim = sim;
        this.scale.multiplyScalar(CUBE_SCALE);
        this.addBehaviors(
            altspace.utilities.behaviors.Object3DSync({ syncData : true }),
            altspace.utilities.behaviors.Spin({ speed : 0.0005 }),
            new ChangeColor(sim)
        );
        
        sim.scene.add(this);
    }
}

export default Cube;