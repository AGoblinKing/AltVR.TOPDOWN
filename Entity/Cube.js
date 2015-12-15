import ChangeColor from "../Behavior/ChangeColor";

let CUBE_SCALE = 150;

// object instantiating doesn't pass the sim by default, so lets bind it.
export default function(sim) {
    
    return () => {
        let cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color : "#ffffff" })
        );
        
        cube.scale.multiplyScalar(CUBE_SCALE);
        cube.addBehaviors(
            altspace.utilities.behaviors.Object3DSync({ syncData : true }),
            altspace.utilities.behaviors.Spin({ speed : 0.0005 }),
            ChangeColor()
        );
        
        sim.scene.add(cube);
        return cube;
    }
}