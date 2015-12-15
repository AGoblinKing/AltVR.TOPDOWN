"use strict";

import Cube from "./Entity/Cube";

var sim = altspace.utilities.Simulation(),
    instanceBase = altspace.utilities.sync.getInstance({ 
        authorId   : "JoshuaGalvin"
    }),
    sceneSync = altspace.utilities.behaviors.SceneSync(instanceBase, {
        instantiators : { 
            "Cube" : () => new Cube(sim)
        },
        ready(firstInstance) {
            if(firstInstance) {
                sceneSync.instantiate("Cube");
            }
        }
    });
    
sim.scene.addBehavior(sceneSync);
