import Behavior from "./Behavior";

let scalar;

// 1 meter = 1 unit
if(altspace.getEnclosure) {
    scalar = altspace.getEnclosure().then(enc => enc.pixelsPerMeter);
} else {
    scalar = new Promise(resolve => {
        resolve(10);
    });
}

class Scalar extends Behavior {
    constructor(sim, amount) {
        super(sim);
        this.amount = amount;
    }
    
    awake(o) {
        super.awake(o);
        
        scalar.then(ratio => {
            this.o3d.scale.multiplyScalar(ratio * this.amount);
            this.o3d.position.multiplyScalar(ratio * this.amount);
        });
    }
}

export default Scalar;
