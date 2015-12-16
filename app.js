"use strict";

import Cube from "./Entity/Cube";
import Map from "./Entity/Map";
import mapData from "./Data/Map";

var sim = altspace.utilities.Simulation(),
    instanceBase = altspace.utilities.sync.getInstance({ 
        authorId   : "JoshuaGalvin"
    }),
    sceneSync = altspace.utilities.behaviors.SceneSync(instanceBase, {
        instantiators : { 
            // "Cube" : () => new Cube(sim)
        },
        
        ready(firstInstance) {
            var map = new Map(sim, mapData);
            sim.scene.add(map);
            
            if(altspace.getEnclosure) {
                altspace.getEnclosure().then(enc => {
                    sim.scene.position.y = -enc.innerHeight/2;
                });
            }
            
            if(firstInstance) {
                // sceneSync.instantiate("Cube");
            }
        }
    });
    
sim.scene.addBehavior(sceneSync);
