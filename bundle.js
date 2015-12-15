(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var object3d = undefined,
        lastColor = undefined;

    return {
        awake: function awake(o) {
            object3d = o;
            o.addEventListener("cursordown", function () {
                o.userData.syncData.color = Math.random() * (255 * 255 * 255);
                o.getBehaviorByType("Object3DSync").enqueueSend();
            });
        },
        update: function update(deltaTime) {
            if (object3d.userData.syncData.color !== lastColor) {
                lastColor = object3d.userData.syncData.color;
                object3d.material.color = new THREE.Color(object3d.userData.syncData.color);
                object3d.material.needsUpdate = true;
            }
        }
    };
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sim) {

    return function () {
        var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "#ffffff" }));

        cube.scale.multiplyScalar(CUBE_SCALE);
        cube.addBehaviors(altspace.utilities.behaviors.Object3DSync({ syncData: true }), altspace.utilities.behaviors.Spin({ speed: 0.0005 }), (0, _ChangeColor2.default)());

        sim.scene.add(cube);
        return cube;
    };
};

var _ChangeColor = require("../Behavior/ChangeColor");

var _ChangeColor2 = _interopRequireDefault(_ChangeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CUBE_SCALE = 150;

// object instantiating doesn't pass the sim by default, so lets bind it.

},{"../Behavior/ChangeColor":1}],3:[function(require,module,exports){
"use strict";

var _Cube = require("./Entity/Cube");

var _Cube2 = _interopRequireDefault(_Cube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sim = altspace.utilities.Simulation(),
    instanceBase = altspace.utilities.sync.getInstance({
    authorId: "JoshuaGalvin"
}),
    sceneSync = altspace.utilities.behaviors.SceneSync(instanceBase, {
    instantiators: {
        "Cube": (0, _Cube2.default)(sim)
    },
    ready: function ready(firstInstance) {
        if (firstInstance) {
            sceneSync.instantiate("Cube");
        }
    }
});

sim.scene.addBehavior(sceneSync);

},{"./Entity/Cube":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJCZWhhdmlvclxcQ2hhbmdlQ29sb3IuanMiLCJFbnRpdHlcXEN1YmUuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7a0JDQWUsWUFBVztBQUN0QixRQUFJLFFBQVEsWUFBQTtRQUNaLFNBQVMsWUFBQSxDQUFDOztBQUVWLFdBQU87QUFDSCxhQUFLLGlCQUFDLENBQUMsRUFBRTtBQUNMLG9CQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2IsYUFBQyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFXO0FBQ3hDLGlCQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFFLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFBLEFBQUMsQ0FBQztBQUN4RCxpQkFBQyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3JELENBQUMsQ0FBQztTQUNOO0FBRUQsY0FBTSxrQkFBQyxTQUFTLEVBQUU7QUFDZCxnQkFBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQy9DLHlCQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQzdDLHdCQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUUsd0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN4QztTQUNKO0tBQ0osQ0FBQztDQUNMOzs7Ozs7Ozs7a0JDaEJjLFVBQVMsR0FBRyxFQUFFOztBQUV6QixXQUFPLFlBQU07QUFDVCxZQUFJLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQ3JCLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM5QixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRyxTQUFTLEVBQUUsQ0FBQyxDQUNyRCxDQUFDOztBQUVGLFlBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLFlBQUksQ0FBQyxZQUFZLENBQ2IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxDQUFDLEVBQzlELFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRyxNQUFNLEVBQUUsQ0FBQyxFQUNyRCw0QkFBYSxDQUNoQixDQUFDOztBQUVGLFdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLGVBQU8sSUFBSSxDQUFDO0tBQ2YsQ0FBQTtDQUNKOzs7Ozs7OztBQXJCRCxJQUFJLFVBQVUsR0FBRyxHQUFHOzs7QUFBQzs7QUNGckIsWUFBWSxDQUFDOzs7Ozs7OztBQUliLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO0lBQ3JDLFlBQVksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDL0MsWUFBUSxFQUFLLGNBQWM7Q0FDOUIsQ0FBQztJQUNGLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO0FBQzdELGlCQUFhLEVBQUc7QUFDWixjQUFNLEVBQUcsb0JBQUssR0FBRyxDQUFDO0tBQ3JCO0FBQ0QsU0FBSyxpQkFBQyxhQUFhLEVBQUU7QUFDakIsWUFBRyxhQUFhLEVBQUU7QUFDZCxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztLQUNKO0NBQ0osQ0FBQyxDQUFDOztBQUVQLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IG9iamVjdDNkLFxyXG4gICAgbGFzdENvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhd2FrZShvKSB7XHJcbiAgICAgICAgICAgIG9iamVjdDNkID0gbztcclxuICAgICAgICAgICAgby5hZGRFdmVudExpc3RlbmVyKFwiY3Vyc29yZG93blwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG8udXNlckRhdGEuc3luY0RhdGEuY29sb3IgPSBNYXRoLnJhbmRvbSgpKigyNTUqMjU1KjI1NSk7XHJcbiAgICAgICAgICAgICAgICBvLmdldEJlaGF2aW9yQnlUeXBlKFwiT2JqZWN0M0RTeW5jXCIpLmVucXVldWVTZW5kKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgICAgICBpZihvYmplY3QzZC51c2VyRGF0YS5zeW5jRGF0YS5jb2xvciAhPT0gbGFzdENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0Q29sb3IgPSBvYmplY3QzZC51c2VyRGF0YS5zeW5jRGF0YS5jb2xvcjtcclxuICAgICAgICAgICAgICAgIG9iamVjdDNkLm1hdGVyaWFsLmNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKG9iamVjdDNkLnVzZXJEYXRhLnN5bmNEYXRhLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdDNkLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0iLCJpbXBvcnQgQ2hhbmdlQ29sb3IgZnJvbSBcIi4uL0JlaGF2aW9yL0NoYW5nZUNvbG9yXCI7XHJcblxyXG5sZXQgQ1VCRV9TQ0FMRSA9IDE1MDtcclxuXHJcbi8vIG9iamVjdCBpbnN0YW50aWF0aW5nIGRvZXNuJ3QgcGFzcyB0aGUgc2ltIGJ5IGRlZmF1bHQsIHNvIGxldHMgYmluZCBpdC5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2ltKSB7XHJcbiAgICBcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChcclxuICAgICAgICAgICAgbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpLFxyXG4gICAgICAgICAgICBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvciA6IFwiI2ZmZmZmZlwiIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjdWJlLnNjYWxlLm11bHRpcGx5U2NhbGFyKENVQkVfU0NBTEUpO1xyXG4gICAgICAgIGN1YmUuYWRkQmVoYXZpb3JzKFxyXG4gICAgICAgICAgICBhbHRzcGFjZS51dGlsaXRpZXMuYmVoYXZpb3JzLk9iamVjdDNEU3luYyh7IHN5bmNEYXRhIDogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgYWx0c3BhY2UudXRpbGl0aWVzLmJlaGF2aW9ycy5TcGluKHsgc3BlZWQgOiAwLjAwMDUgfSksXHJcbiAgICAgICAgICAgIENoYW5nZUNvbG9yKClcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNpbS5zY2VuZS5hZGQoY3ViZSk7XHJcbiAgICAgICAgcmV0dXJuIGN1YmU7XHJcbiAgICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBjdWJlIGZyb20gXCIuL0VudGl0eS9DdWJlXCI7XHJcblxyXG52YXIgc2ltID0gYWx0c3BhY2UudXRpbGl0aWVzLlNpbXVsYXRpb24oKSxcclxuICAgIGluc3RhbmNlQmFzZSA9IGFsdHNwYWNlLnV0aWxpdGllcy5zeW5jLmdldEluc3RhbmNlKHsgXHJcbiAgICAgICAgYXV0aG9ySWQgICA6IFwiSm9zaHVhR2FsdmluXCJcclxuICAgIH0pLFxyXG4gICAgc2NlbmVTeW5jID0gYWx0c3BhY2UudXRpbGl0aWVzLmJlaGF2aW9ycy5TY2VuZVN5bmMoaW5zdGFuY2VCYXNlLCB7XHJcbiAgICAgICAgaW5zdGFudGlhdG9ycyA6IHsgXHJcbiAgICAgICAgICAgIFwiQ3ViZVwiIDogY3ViZShzaW0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkeShmaXJzdEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGlmKGZpcnN0SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lU3luYy5pbnN0YW50aWF0ZShcIkN1YmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG5zaW0uc2NlbmUuYWRkQmVoYXZpb3Ioc2NlbmVTeW5jKTtcclxuIl19
