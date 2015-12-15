/*global altspace, THREE*/
"use strict";

var sim = altspace.utilities.Simulation(),
    instanceBase = altspace.utilities.sync.getInstance({ 
        authorId   : "JoshuaGalvin"
    }),
    sceneSync = altspace.utilities.behaviors.SceneSync(instanceBase, {
        instantiators : { "Cube" : createCube },
        ready(firstInstance) {
            if(firstInstance) {
                sceneSync.instantiate("Cube");
            }
        }
    }),
    CUBE_SCALE = 150;
    
sim.scene.addBehavior(sceneSync);

function createCube() {
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

// this looks like an object to me
function ChangeColor() {
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