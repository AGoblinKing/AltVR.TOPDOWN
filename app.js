"use strict";

import cube from "./Entity/Cube";

var sim = altspace.utilities.Simulation(),
    instanceBase = altspace.utilities.sync.getInstance({ 
        authorId   : "JoshuaGalvin"
    }),
    sceneSync = altspace.utilities.behaviors.SceneSync(instanceBase, {
        instantiators : { 
            "Cube" : cube(sim)
        },
        ready(firstInstance) {
            if(firstInstance) {
                sceneSync.instantiate("Cube");
            }
        }
    });
    
sim.scene.addBehavior(sceneSync);
