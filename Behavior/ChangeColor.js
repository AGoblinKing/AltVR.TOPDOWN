export default function() {
    let object3d,
    lastColor;
        
    return {
        awake(o) {
            object3d = o;
            o.addEventListener("cursordown", function() {
                o.userData.syncData.color = Math.random()*(255*255*255);
                o.getBehaviorByType("Object3DSync").enqueueSend();
            });
        },
        
        update(deltaTime) {
            if(object3d.userData.syncData.color !== lastColor) {
                lastColor = object3d.userData.syncData.color;
                object3d.material.color = new THREE.Color(object3d.userData.syncData.color);
                object3d.material.needsUpdate = true;
            }
        }
    };
}