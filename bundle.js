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
            // Behavior could be added later
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

var scalar = undefined;

// 1 meter = 1 unit
if (altspace.getEnclosure) {
    scalar = altspace.getEnclosure().then(function (enc) {
        return enc.pixelsPerMeter;
    });
} else {
    scalar = new Promise(function (resolve) {
        resolve(10);
    });
}

var Scalar = (function (_Behavior) {
    _inherits(Scalar, _Behavior);

    function Scalar(sim, amount) {
        _classCallCheck(this, Scalar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scalar).call(this, sim));

        _this.amount = amount;
        return _this;
    }

    _createClass(Scalar, [{
        key: "awake",
        value: function awake(o) {
            var _this2 = this;

            _get(Object.getPrototypeOf(Scalar.prototype), "awake", this).call(this, o);

            scalar.then(function (ratio) {
                _this2.o3d.scale.multiplyScalar(ratio * _this2.amount);
                _this2.o3d.position.multiplyScalar(ratio * _this2.amount);
            });
        }
    }]);

    return Scalar;
})(_Behavior3.default);

exports.default = Scalar;

},{"./Behavior":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n#################\n#P*          **P#\n#*# # # # # # #*#\n#*              #\n# # # # # # # # #\n#               #\n# # # # # # # # #\n#               #\n# # # # # # # # #\n#               #\n# # # # # # # # #\n#              *#\n#*# # # # # # #*#\n#P**          *P#\n#################";

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var materialCreator = new THREE.MTLLoader.MaterialCreator(),
    geom = new THREE.BoxGeometry(1, .7, 1),
    texture = materialCreator.loadTexture("Textures/soft.png"),
    mat = new THREE.MeshBasicMaterial({ color: "#ffffff", map: texture });

var Wall = (function (_THREE$Mesh) {
    _inherits(Wall, _THREE$Mesh);

    function Wall(sim) {
        _classCallCheck(this, Wall);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Wall).call(this, geom, mat));
    }

    return Wall;
})(THREE.Mesh);

exports.default = Wall;

},{}],6:[function(require,module,exports){
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
        return _this;
    }

    return Cube;
})(THREE.Mesh);

exports.default = Cube;

},{"../Behavior/ChangeColor":2}],7:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Wall = require("./Wall");

var _Wall2 = _interopRequireDefault(_Wall);

var _Block = require("./Block");

var _Block2 = _interopRequireDefault(_Block);

var _Scalar = require("../Behavior/Scalar");

var _Scalar2 = _interopRequireDefault(_Scalar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var symDefs = {
    "#": function _(sim) {
        return new _Wall2.default(sim);
    },
    " ": function _(sim) {
        return Math.random() > .3 ? new _Block2.default(sim) : undefined;
    }
};

var Map = (function (_THREE$Object3D) {
    _inherits(Map, _THREE$Object3D);

    function Map(sim, mapData) {
        _classCallCheck(this, Map);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Map).call(this));

        _this.userData.map = mapData;
        _this.addBehaviors(new _Scalar2.default(sim, .25));

        var rows = mapData.split("\n");
        _this.userData.height = rows.length;
        _this.userData.width = 0;

        rows.forEach(function (row, y) {
            _this.userData.width = Math.max(_this.userData.width, row.length);
            row.split("").forEach(function (sym, x) {
                var item = symDefs[sym];

                if (item && y !== 0) {
                    var o3d = item(sim);

                    if (o3d) {
                        o3d.position.set(x, 0, y);
                        _this.add(o3d);
                    }
                }
            });
        });

        _this.center();
        return _this;
    }

    _createClass(Map, [{
        key: "center",
        value: function center() {
            this.position.set(-this.userData.width / 2, 0, -this.userData.height / 2);
        }
    }]);

    return Map;
})(THREE.Object3D);

exports.default = Map;

},{"../Behavior/Scalar":3,"./Block":5,"./Wall":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var materialCreator = new THREE.MTLLoader.MaterialCreator(),
    geom = new THREE.BoxGeometry(1, 1, 1),
    texture = materialCreator.loadTexture("Textures/hard.png"),
    mat = new THREE.MeshBasicMaterial({ color: "#ffffff", map: texture });

var Wall = (function (_THREE$Mesh) {
    _inherits(Wall, _THREE$Mesh);

    function Wall(sim) {
        _classCallCheck(this, Wall);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Wall).call(this, geom, mat));
    }

    return Wall;
})(THREE.Mesh);

exports.default = Wall;

},{}],9:[function(require,module,exports){
"use strict";

var _Cube = require("./Entity/Cube");

var _Cube2 = _interopRequireDefault(_Cube);

var _Map = require("./Entity/Map");

var _Map2 = _interopRequireDefault(_Map);

var _Map3 = require("./Data/Map");

var _Map4 = _interopRequireDefault(_Map3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sim = altspace.utilities.Simulation(),
    instanceBase = altspace.utilities.sync.getInstance({
    authorId: "JoshuaGalvin"
}),
    sceneSync = altspace.utilities.behaviors.SceneSync(instanceBase, {
    instantiators: {
        // "Cube" : () => new Cube(sim)
    },

    ready: function ready(firstInstance) {
        var map = new _Map2.default(sim, _Map4.default);
        sim.scene.add(map);

        if (altspace.getEnclosure) {
            altspace.getEnclosure().then(function (enc) {
                sim.scene.position.y = -enc.innerHeight / 2;
            });
        }

        if (firstInstance) {
            // sceneSync.instantiate("Cube");
        }
    }
});

sim.scene.addBehavior(sceneSync);

},{"./Data/Map":4,"./Entity/Cube":6,"./Entity/Map":7}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJCZWhhdmlvclxcQmVoYXZpb3IuanMiLCJCZWhhdmlvclxcQ2hhbmdlQ29sb3IuanMiLCJCZWhhdmlvclxcU2NhbGFyLmpzIiwiRGF0YS9NYXAvaW5kZXguanMiLCJFbnRpdHlcXEJsb2NrLmpzIiwiRW50aXR5XFxDdWJlLmpzIiwiRW50aXR5XFxNYXAuanMiLCJFbnRpdHlcXFdhbGwuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sUUFBUTtBQUNWLGFBREUsUUFBUSxDQUNFLEdBQUcsRUFBRTs4QkFEZixRQUFROztBQUVOLFlBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2xCOztpQkFIQyxRQUFROzs4QkFLSixDQUFDLEVBQUU7QUFDTCxnQkFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDYixnQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7U0FDOUM7OzsrQkFFTTs7QUFFSCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1RDs7O1dBYkMsUUFBUTs7O2tCQWdCQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDZGpCLFdBQVc7Y0FBWCxXQUFXOzthQUFYLFdBQVc7OEJBQVgsV0FBVzs7c0VBQVgsV0FBVzs7O2lCQUFYLFdBQVc7OzhCQUNQLENBQUMsRUFBRTs7O0FBQ0wsdUNBRkYsV0FBVyx1Q0FFRyxDQUFDLEVBQUU7O0FBRWYsZ0JBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQU07QUFDMUMsdUJBQUssUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUUsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUEs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RUQsWUFBRyxhQUFhLEVBQUU7O1NBRWpCO0tBQ0o7Q0FDSixDQUFDLENBQUM7O0FBRVAsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc2ltKSB7XHJcbiAgICAgICAgdGhpcy5zaW0gPSBzaW07XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgYXdha2Uobykge1xyXG4gICAgICAgIHRoaXMubzNkID0gbztcclxuICAgICAgICB0aGlzLnN5bmNEYXRhID0gdGhpcy5vM2QudXNlckRhdGEuc3luY0RhdGE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlbmQoKSB7XHJcbiAgICAgICAgLy8gQmVoYXZpb3IgY291bGQgYmUgYWRkZWQgbGF0ZXJcclxuICAgICAgICB0aGlzLm8zZC5nZXRCZWhhdmlvckJ5VHlwZShcIk9iamVjdDNEU3luY1wiKS5lbnF1ZXVlU2VuZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWhhdmlvcjsiLCJpbXBvcnQgQmVoYXZpb3IgZnJvbSBcIi4vQmVoYXZpb3JcIjtcclxuXHJcbmNsYXNzIENoYW5nZUNvbG9yIGV4dGVuZHMgQmVoYXZpb3Ige1xyXG4gICAgYXdha2Uobykge1xyXG4gICAgICAgIHN1cGVyLmF3YWtlKG8pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubzNkLmFkZEV2ZW50TGlzdGVuZXIoXCJjdXJzb3Jkb3duXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zeW5jRGF0YS5jb2xvciA9IE1hdGgucmFuZG9tKCkqKDI1NSoyNTUqMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgICAgICBpZih0aGlzLnN5bmNEYXRhLmNvbG9yICE9PSB0aGlzLmxhc3RDb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDb2xvciA9IHRoaXMuc3luY0RhdGEuY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMubzNkLm1hdGVyaWFsLmNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKHRoaXMuc3luY0RhdGEuY29sb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm8zZC5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2VDb2xvcjtcclxuIiwiaW1wb3J0IEJlaGF2aW9yIGZyb20gXCIuL0JlaGF2aW9yXCI7XHJcblxyXG5sZXQgc2NhbGFyO1xyXG5cclxuLy8gMSBtZXRlciA9IDEgdW5pdFxyXG5pZihhbHRzcGFjZS5nZXRFbmNsb3N1cmUpIHtcclxuICAgIHNjYWxhciA9IGFsdHNwYWNlLmdldEVuY2xvc3VyZSgpLnRoZW4oZW5jID0+IGVuYy5waXhlbHNQZXJNZXRlcik7XHJcbn0gZWxzZSB7XHJcbiAgICBzY2FsYXIgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICByZXNvbHZlKDEwKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jbGFzcyBTY2FsYXIgZXh0ZW5kcyBCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaW0sIGFtb3VudCkge1xyXG4gICAgICAgIHN1cGVyKHNpbSk7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGF3YWtlKG8pIHtcclxuICAgICAgICBzdXBlci5hd2FrZShvKTtcclxuICAgICAgICBcclxuICAgICAgICBzY2FsYXIudGhlbihyYXRpbyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubzNkLnNjYWxlLm11bHRpcGx5U2NhbGFyKHJhdGlvICogdGhpcy5hbW91bnQpO1xyXG4gICAgICAgICAgICB0aGlzLm8zZC5wb3NpdGlvbi5tdWx0aXBseVNjYWxhcihyYXRpbyAqIHRoaXMuYW1vdW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NhbGFyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFwiXFxuIyMjIyMjIyMjIyMjIyMjIyNcXG4jUCogICAgICAgICAgKipQI1xcbiMqIyAjICMgIyAjICMgIyojXFxuIyogICAgICAgICAgICAgICNcXG4jICMgIyAjICMgIyAjICMgI1xcbiMgICAgICAgICAgICAgICAjXFxuIyAjICMgIyAjICMgIyAjICNcXG4jICAgICAgICAgICAgICAgI1xcbiMgIyAjICMgIyAjICMgIyAjXFxuIyAgICAgICAgICAgICAgICNcXG4jICMgIyAjICMgIyAjICMgI1xcbiMgICAgICAgICAgICAgICojXFxuIyojICMgIyAjICMgIyAjKiNcXG4jUCoqICAgICAgICAgICpQI1xcbiMjIyMjIyMjIyMjIyMjIyMjXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSIsImxldCBtYXRlcmlhbENyZWF0b3IgPSBuZXcgVEhSRUUuTVRMTG9hZGVyLk1hdGVyaWFsQ3JlYXRvcigpLFxyXG4gICAgZ2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAuNywgMSksXHJcbiAgICB0ZXh0dXJlID0gbWF0ZXJpYWxDcmVhdG9yLmxvYWRUZXh0dXJlKFwiVGV4dHVyZXMvc29mdC5wbmdcIiksXHJcbiAgICBtYXQgID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3IgOiBcIiNmZmZmZmZcIiwgbWFwIDogdGV4dHVyZSB9KTtcclxuXHJcbmNsYXNzIFdhbGwgZXh0ZW5kcyBUSFJFRS5NZXNoIHtcclxuICAgICBjb25zdHJ1Y3RvcihzaW0pIHtcclxuICAgICAgICBzdXBlcihnZW9tLCBtYXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYWxsOyIsImltcG9ydCBDaGFuZ2VDb2xvciBmcm9tIFwiLi4vQmVoYXZpb3IvQ2hhbmdlQ29sb3JcIjtcclxuXHJcbmxldCBDVUJFX1NDQUxFID0gMTUwO1xyXG5cclxuY2xhc3MgQ3ViZSBleHRlbmRzIFRIUkVFLk1lc2gge1xyXG4gICAgY29uc3RydWN0b3Ioc2ltKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKSxcclxuICAgICAgICAgICAgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3IgOiBcIiNmZmZmZmZcIiB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaW0gPSBzaW07XHJcbiAgICAgICAgdGhpcy5zY2FsZS5tdWx0aXBseVNjYWxhcihDVUJFX1NDQUxFKTtcclxuICAgICAgICB0aGlzLmFkZEJlaGF2aW9ycyhcclxuICAgICAgICAgICAgYWx0c3BhY2UudXRpbGl0aWVzLmJlaGF2aW9ycy5PYmplY3QzRFN5bmMoeyBzeW5jRGF0YSA6IHRydWUgfSksXHJcbiAgICAgICAgICAgIGFsdHNwYWNlLnV0aWxpdGllcy5iZWhhdmlvcnMuU3Bpbih7IHNwZWVkIDogMC4wMDA1IH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhbmdlQ29sb3Ioc2ltKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1YmU7IiwiaW1wb3J0IFdhbGwgZnJvbSBcIi4vV2FsbFwiO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcclxuaW1wb3J0IFNjYWxhciBmcm9tIFwiLi4vQmVoYXZpb3IvU2NhbGFyXCI7XHJcblxyXG5sZXQgc3ltRGVmcyA9IHtcclxuICAgIFwiI1wiIDogc2ltID0+IG5ldyBXYWxsKHNpbSksXHJcbiAgICBcIiBcIiA6IHNpbSA9PiBNYXRoLnJhbmRvbSgpID4gLjMgPyBuZXcgQmxvY2soc2ltKSA6IHVuZGVmaW5lZFxyXG59O1xyXG5cclxuY2xhc3MgTWFwIGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xyXG4gICAgY29uc3RydWN0b3Ioc2ltLCBtYXBEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVzZXJEYXRhLm1hcCA9IG1hcERhdGE7XHJcbiAgICAgICAgdGhpcy5hZGRCZWhhdmlvcnMobmV3IFNjYWxhcihzaW0sIC4yNSkpO1xyXG5cclxuICAgICAgICBsZXQgcm93cyA9IG1hcERhdGEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgdGhpcy51c2VyRGF0YS5oZWlnaHQgPSByb3dzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnVzZXJEYXRhLndpZHRoID0gMDtcclxuICAgICAgICBcclxuICAgICAgICByb3dzLmZvckVhY2goKHJvdywgeSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJEYXRhLndpZHRoID0gTWF0aC5tYXgodGhpcy51c2VyRGF0YS53aWR0aCwgcm93Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJvdy5zcGxpdChcIlwiKS5mb3JFYWNoKChzeW0sIHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gc3ltRGVmc1tzeW1dO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpdGVtICYmIHkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbzNkID0gaXRlbShzaW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG8zZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvM2QucG9zaXRpb24uc2V0KHgsIDAsIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChvM2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jZW50ZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2VudGVyKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KC10aGlzLnVzZXJEYXRhLndpZHRoLzIsIDAsIC10aGlzLnVzZXJEYXRhLmhlaWdodC8yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwOyIsImxldCBtYXRlcmlhbENyZWF0b3IgPSBuZXcgVEhSRUUuTVRMTG9hZGVyLk1hdGVyaWFsQ3JlYXRvcigpLFxyXG4gICAgZ2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKSxcclxuICAgIHRleHR1cmUgPSBtYXRlcmlhbENyZWF0b3IubG9hZFRleHR1cmUoXCJUZXh0dXJlcy9oYXJkLnBuZ1wiKSxcclxuICAgIG1hdCAgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvciA6IFwiI2ZmZmZmZlwiLCBtYXAgOiB0ZXh0dXJlIH0pO1xyXG5cclxuY2xhc3MgV2FsbCBleHRlbmRzIFRIUkVFLk1lc2gge1xyXG4gICAgIGNvbnN0cnVjdG9yKHNpbSkge1xyXG4gICAgICAgIHN1cGVyKGdlb20sIG1hdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhbGw7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9FbnRpdHkvQ3ViZVwiO1xyXG5pbXBvcnQgTWFwIGZyb20gXCIuL0VudGl0eS9NYXBcIjtcclxuaW1wb3J0IG1hcERhdGEgZnJvbSBcIi4vRGF0YS9NYXBcIjtcclxuXHJcbnZhciBzaW0gPSBhbHRzcGFjZS51dGlsaXRpZXMuU2ltdWxhdGlvbigpLFxyXG4gICAgaW5zdGFuY2VCYXNlID0gYWx0c3BhY2UudXRpbGl0aWVzLnN5bmMuZ2V0SW5zdGFuY2UoeyBcclxuICAgICAgICBhdXRob3JJZCAgIDogXCJKb3NodWFHYWx2aW5cIlxyXG4gICAgfSksXHJcbiAgICBzY2VuZVN5bmMgPSBhbHRzcGFjZS51dGlsaXRpZXMuYmVoYXZpb3JzLlNjZW5lU3luYyhpbnN0YW5jZUJhc2UsIHtcclxuICAgICAgICBpbnN0YW50aWF0b3JzIDogeyBcclxuICAgICAgICAgICAgLy8gXCJDdWJlXCIgOiAoKSA9PiBuZXcgQ3ViZShzaW0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZWFkeShmaXJzdEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXAgPSBuZXcgTWFwKHNpbSwgbWFwRGF0YSk7XHJcbiAgICAgICAgICAgIHNpbS5zY2VuZS5hZGQobWFwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGFsdHNwYWNlLmdldEVuY2xvc3VyZSkge1xyXG4gICAgICAgICAgICAgICAgYWx0c3BhY2UuZ2V0RW5jbG9zdXJlKCkudGhlbihlbmMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbS5zY2VuZS5wb3NpdGlvbi55ID0gLWVuYy5pbm5lckhlaWdodC8yO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGZpcnN0SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNjZW5lU3luYy5pbnN0YW50aWF0ZShcIkN1YmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG5zaW0uc2NlbmUuYWRkQmVoYXZpb3Ioc2NlbmVTeW5jKTtcclxuIl19
