System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, tween, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameRoot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc3d0kUOIhG1Y4SdENEaZyf", "GameRoot", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameRoot", GameRoot = (_dec = ccclass('GameRoot'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class GameRoot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "wxy", _descriptor2, this);

          _initializerDefineProperty(this, "rLabelNode", _descriptor3, this);
        }

        start() {
          this.button.on(Node.EventType.TOUCH_START, () => {
            this.button.setScale(1.2, 1.2, 1.2);
          });
          this.button.on(Node.EventType.TOUCH_END, () => {
            this.myAnimation();
            this.button.setScale(1, 1, 1);
          });
        }

        update(deltaTime) {}

        myAnimation() {
          const obj = {
            n: 0
          };
          const comp = this.rLabelNode.getComponent(Label);
          tween(obj).to(3, {
            n: 200
          }, {
            onUpdate: (target, ratio) => {
              comp.string = String(obj.n); // 在回调函数内部的 this 上下文会发生变化，因此需要采取措施来确保 this 引用的正确性。
              // 在你的 onUpdate 回调内部，this 可能不会引用到你期望的对象。

              this.wxy.setPosition(0, obj.n); // 使用 => 使用箭头函数将 this 绑定到你的函数内
            },
            easing: 'quadOut' // 缓动曲线为弹性曲线

          }).to(3, {
            n: 0
          }, {
            onUpdate: (target, ratio) => {
              comp.string = String(obj.n);
              this.wxy.setPosition(0, obj.n);
            },
            easing: 'quadIn' // 缓动曲线为弹性曲线

          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "wxy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rLabelNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d14af9bb7ca91e2b696e6eb01a50ebeb04a93c6b.js.map