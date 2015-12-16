import Wall from "./Wall";
import Block from "./Block";
import Scalar from "../Behavior/Scalar";

let symDefs = {
    "#" : sim => new Wall(sim),
    " " : sim => Math.random() > .3 ? new Block(sim) : undefined
};

class Map extends THREE.Object3D {
    constructor(sim, mapData) {
        super();
        
        this.userData.map = mapData;
        this.addBehaviors(new Scalar(sim, .25));

        let rows = mapData.split("\n");
        this.userData.height = rows.length;
        this.userData.width = 0;
        
        rows.forEach((row, y) => {
            this.userData.width = Math.max(this.userData.width, row.length);
            row.split("").forEach((sym, x) => {
                let item = symDefs[sym];
                
                if(item && y !== 0) {
                    let o3d = item(sim);
                    
                    if(o3d) {
                        o3d.position.set(x, 0, y);
                        this.add(o3d);
                    }
                }
            });
        });
        
        this.center();
    }
    
    center() {
        this.position.set(-this.userData.width/2, 0, -this.userData.height/2);
    }
}

export default Map;