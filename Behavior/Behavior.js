class Behavior {
    constructor(sim) {
        this.sim = sim;
    }
   
    awake(o) {
        this.o3d = o;
        this.syncData = this.o3d.userData.syncData;
        
    }
    
    send() {
        this.o3d.getBehaviorByType("Object3DSync").enqueueSend();
    }
}

export default Behavior;