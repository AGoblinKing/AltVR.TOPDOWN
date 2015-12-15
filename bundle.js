(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Behavior = (function () {
    function Behavior(sim) {
        _classCallCheck(this, Behavior);

        this.sim = sim;
    }

    _createClass(Behavior, [{
        key: "awake",
        value: function awake(o) {
            this.o3d = o;
            this.syncData = this.o3d.userData.syncData;
        }
    }, {
        key: "send",
        value: function send() {
            this.o3d.getBehaviorByType("Object3DSync").enqueueSend();
        }
    }]);

    return Behavior;
})();

exports.default = Behavior;

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Behavior2 = require("./Behavior");

var _Behavior3 = _interopRequireDefault(_Behavior2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChangeColor = (function (_Behavior) {
    _inherits(ChangeColor, _Behavior);

    function ChangeColor() {
        _classCallCheck(this, ChangeColor);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ChangeColor).apply(this, arguments));
    }

    _createClass(ChangeColor, [{
        key: "awake",
        value: function awake(o) {
            var _this2 = this;

            _get(Object.getPrototypeOf(ChangeColor.prototype), "awake", this).call(this, o);

            this.o3d.addEventListener("cursordown", function () {
                _this2.syncData.color = Math.random() * (255 * 255 * 255);
                _this2.send();
            });
        }
    }, {
        key: "update",
        value: function update(deltaTime) {
            if (this.syncData.color !== this.lastColor) {
                this.lastColor = this.syncData.color;
                this.o3d.material.color = new THREE.Color(this.syncData.color);
                this.o3d.material.needsUpdate = true;
            }
        }
    }]);

    return ChangeColor;
})(_Behavior3.default);

exports.default = ChangeColor;

},{"./Behavior":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ChangeColor = require("../Behavior/ChangeColor");

var _ChangeColor2 = _interopRequireDefault(_ChangeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CUBE_SCALE = 150;

var Cube = (function (_THREE$Mesh) {
    _inherits(Cube, _THREE$Mesh);

    function Cube(sim) {
        _classCallCheck(this, Cube);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cube).call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: "#ffffff" })));

        _this.sim = sim;
        _this.scale.multiplyScalar(CUBE_SCALE);
        _this.addBehaviors(altspace.utilities.behaviors.Object3DSync({ syncData: true }), altspace.utilities.behaviors.Spin({ speed: 0.0005 }), new _ChangeColor2.default(sim));

        sim.scene.add(_this);
        return _this;
    }

    return Cube;
})(THREE.Mesh);

exports.default = Cube;

},{"../Behavior/ChangeColor":2}],4:[function(require,module,exports){
"use strict";

var _Cube2 = require("./Entity/Cube");

var _Cube3 = _interopRequireDefault(_Cube2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sim = altspace.utilities.Simulation(),
    instanceBase = altspace.utilities.sync.getInstance({
    authorId: "JoshuaGalvin"
}),
    sceneSync = altspace.utilities.behaviors.SceneSync(instanceBase, {
    instantiators: {
        "Cube": function Cube() {
            return new _Cube3.default(sim);
        }
    },
    ready: function ready(firstInstance) {
        if (firstInstance) {
            sceneSync.instantiate("Cube");
        }
    }
});

sim.scene.addBehavior(sceneSync);

},{"./Entity/Cube":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJCZWhhdmlvclxcQmVoYXZpb3IuanMiLCJCZWhhdmlvclxcQ2hhbmdlQ29sb3IuanMiLCJFbnRpdHlcXEN1YmUuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sUUFBUTtBQUNWLGFBREUsUUFBUSxDQUNFLEdBQUcsRUFBRTs4QkFEZixRQUFROztBQUVOLFlBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2xCOztpQkFIQyxRQUFROzs4QkFLSixDQUFDLEVBQUU7QUFDTCxnQkFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDYixnQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7U0FFOUM7OzsrQkFFTTtBQUNILGdCQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVEOzs7V0FiQyxRQUFROzs7a0JBZ0JDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNkakIsV0FBVztjQUFYLFdBQVc7O2FBQVgsV0FBVzs4QkFBWCxXQUFXOztzRUFBWCxXQUFXOzs7aUJBQVgsV0FBVzs7OEJBQ1AsQ0FBQyxFQUFFOzs7QUFDTCx1Q0FGRixXQUFXLHVDQUVHLENBQUMsRUFBRTs7QUFFZixnQkFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtBQUMxQyx1QkFBSyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBRSxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQSxBQUFDLENBQUM7QUFDbEQsdUJBQUssSUFBSSxFQUFFLENBQUM7YUFDZixDQUFDLENBQUM7U0FDTjs7OytCQUVNLFNBQVMsRUFBRTtBQUNkLGdCQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDdkMsb0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFDckMsb0JBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvRCxvQkFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN4QztTQUNKOzs7V0FoQkMsV0FBVzs7O2tCQW1CRixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjFCLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQzs7SUFFZixJQUFJO2NBQUosSUFBSTs7QUFDTixhQURFLElBQUksQ0FDTSxHQUFHLEVBQUU7OEJBRGYsSUFBSTs7MkVBQUosSUFBSSxhQUdFLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM5QixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRyxTQUFTLEVBQUUsQ0FBQzs7QUFHdEQsY0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2YsY0FBSyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLGNBQUssWUFBWSxDQUNiLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsQ0FBQyxFQUM5RCxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUcsTUFBTSxFQUFFLENBQUMsRUFDckQsMEJBQWdCLEdBQUcsQ0FBQyxDQUN2QixDQUFDOztBQUVGLFdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFNLENBQUM7O0tBQ3ZCOztXQWhCQyxJQUFJO0dBQVMsS0FBSyxDQUFDLElBQUk7O2tCQW1CZCxJQUFJOzs7QUN2Qm5CLFlBQVksQ0FBQzs7Ozs7Ozs7QUFJYixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtJQUNyQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQy9DLFlBQVEsRUFBSyxjQUFjO0NBQzlCLENBQUM7SUFDRixTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtBQUM3RCxpQkFBYSxFQUFHO0FBQ1osY0FBTSxFQUFHO21CQUFNLG1CQUFTLEdBQUcsQ0FBQztTQUFBO0tBQy9CO0FBQ0QsU0FBSyxpQkFBQyxhQUFhLEVBQUU7QUFDakIsWUFBRyxhQUFhLEVBQUU7QUFDZCxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztLQUNKO0NBQ0osQ0FBQyxDQUFDOztBQUVQLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIEJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNpbSkge1xyXG4gICAgICAgIHRoaXMuc2ltID0gc2ltO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGF3YWtlKG8pIHtcclxuICAgICAgICB0aGlzLm8zZCA9IG87XHJcbiAgICAgICAgdGhpcy5zeW5jRGF0YSA9IHRoaXMubzNkLnVzZXJEYXRhLnN5bmNEYXRhO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZW5kKCkge1xyXG4gICAgICAgIHRoaXMubzNkLmdldEJlaGF2aW9yQnlUeXBlKFwiT2JqZWN0M0RTeW5jXCIpLmVucXVldWVTZW5kKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlaGF2aW9yOyIsImltcG9ydCBCZWhhdmlvciBmcm9tIFwiLi9CZWhhdmlvclwiO1xyXG5cclxuY2xhc3MgQ2hhbmdlQ29sb3IgZXh0ZW5kcyBCZWhhdmlvciB7XHJcbiAgICBhd2FrZShvKSB7XHJcbiAgICAgICAgc3VwZXIuYXdha2Uobyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vM2QuYWRkRXZlbnRMaXN0ZW5lcihcImN1cnNvcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNEYXRhLmNvbG9yID0gTWF0aC5yYW5kb20oKSooMjU1KjI1NSoyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIGlmKHRoaXMuc3luY0RhdGEuY29sb3IgIT09IHRoaXMubGFzdENvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENvbG9yID0gdGhpcy5zeW5jRGF0YS5jb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5vM2QubWF0ZXJpYWwuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IodGhpcy5zeW5jRGF0YS5jb2xvcik7XHJcbiAgICAgICAgICAgIHRoaXMubzNkLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW5nZUNvbG9yO1xyXG4iLCJpbXBvcnQgQ2hhbmdlQ29sb3IgZnJvbSBcIi4uL0JlaGF2aW9yL0NoYW5nZUNvbG9yXCI7XHJcblxyXG5sZXQgQ1VCRV9TQ0FMRSA9IDE1MDtcclxuXHJcbmNsYXNzIEN1YmUgZXh0ZW5kcyBUSFJFRS5NZXNoIHtcclxuICAgIGNvbnN0cnVjdG9yKHNpbSkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSksXHJcbiAgICAgICAgICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yIDogXCIjZmZmZmZmXCIgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2ltID0gc2ltO1xyXG4gICAgICAgIHRoaXMuc2NhbGUubXVsdGlwbHlTY2FsYXIoQ1VCRV9TQ0FMRSk7XHJcbiAgICAgICAgdGhpcy5hZGRCZWhhdmlvcnMoXHJcbiAgICAgICAgICAgIGFsdHNwYWNlLnV0aWxpdGllcy5iZWhhdmlvcnMuT2JqZWN0M0RTeW5jKHsgc3luY0RhdGEgOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICBhbHRzcGFjZS51dGlsaXRpZXMuYmVoYXZpb3JzLlNwaW4oeyBzcGVlZCA6IDAuMDAwNSB9KSxcclxuICAgICAgICAgICAgbmV3IENoYW5nZUNvbG9yKHNpbSlcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNpbS5zY2VuZS5hZGQodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1YmU7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9FbnRpdHkvQ3ViZVwiO1xyXG5cclxudmFyIHNpbSA9IGFsdHNwYWNlLnV0aWxpdGllcy5TaW11bGF0aW9uKCksXHJcbiAgICBpbnN0YW5jZUJhc2UgPSBhbHRzcGFjZS51dGlsaXRpZXMuc3luYy5nZXRJbnN0YW5jZSh7IFxyXG4gICAgICAgIGF1dGhvcklkICAgOiBcIkpvc2h1YUdhbHZpblwiXHJcbiAgICB9KSxcclxuICAgIHNjZW5lU3luYyA9IGFsdHNwYWNlLnV0aWxpdGllcy5iZWhhdmlvcnMuU2NlbmVTeW5jKGluc3RhbmNlQmFzZSwge1xyXG4gICAgICAgIGluc3RhbnRpYXRvcnMgOiB7IFxyXG4gICAgICAgICAgICBcIkN1YmVcIiA6ICgpID0+IG5ldyBDdWJlKHNpbSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlYWR5KGZpcnN0SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgaWYoZmlyc3RJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgc2NlbmVTeW5jLmluc3RhbnRpYXRlKFwiQ3ViZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbnNpbS5zY2VuZS5hZGRCZWhhdmlvcihzY2VuZVN5bmMpO1xyXG4iXX0=
