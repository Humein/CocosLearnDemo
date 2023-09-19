System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Label, Node, Sprite, tween, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameRoot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc3d0kUOIhG1Y4SdENEaZyf", "GameRoot", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Node', 'Sprite', 'tween', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameRoot", GameRoot = (_dec = ccclass('GameRoot'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class GameRoot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "buttonLeft", _descriptor, this);

          _initializerDefineProperty(this, "buttonRight", _descriptor2, this);

          _initializerDefineProperty(this, "wxy", _descriptor3, this);

          _initializerDefineProperty(this, "rLabelNode", _descriptor4, this);
        }

        start() {
          // 获取 rLabelNode 的 cc.Sprite 组件
          const lSprite = this.buttonLeft.getComponent(Sprite);
          const rSprite = this.buttonLeft.getComponent(Sprite); // 将背景颜色应用到 cc.Sprite 组件的 Material

          lSprite.color = new Color(255, 0, 0); // 这里设置为红色;

          rSprite.color = new Color(0, 255, 0); // 这里设置为绿色;

          this.buttonLeft.on(Node.EventType.TOUCH_START, () => {
            this.buttonLeft.setScale(1.2, 1.2, 1.2);
          });
          this.buttonLeft.on(Node.EventType.TOUCH_END, () => {
            this.buttonLeft.setScale(1, 1, 1);
            const color = new Vec3(255, 255, 255);
            tween(color).to(2, {
              x: 10,
              y: 150,
              z: 0
            }, {
              onUpdate: (target, ratio) => {
                this.rLabelNode.color = new Color(color.x, color.y, color.z);
                console.log("color: ", color);
              }
            }).to(2, {
              x: 120,
              y: 0,
              z: 100
            }, {
              onUpdate: (target, ratio) => {
                this.rLabelNode.color = new Color(color.x, color.y, color.z);
              }
            }).union().repeatForever().start();
            const obj = {
              n: this.wxy.position.x
            };
            tween(obj).to(1, {
              n: this.wxy.position.x - 50
            }, {
              onUpdate: (target, ratio) => {
                this.rLabelNode.color = new Color(color.x, color.y, color.z);
              }
            }).start();
          }, this);
          this.buttonRight.on(Node.EventType.TOUCH_START, () => {
            this.buttonRight.setScale(1.2, 1.2, 1.2);
          });
          this.buttonRight.on(Node.EventType.TOUCH_END, () => {
            this.buttonLeft.setScale(1, 1, 1);
            const obj = {
              n: this.wxy.position.x
            };
            tween(obj).to(1, {
              n: this.wxy.position.x + 50
            }, {
              onUpdate: (target, ratio) => {
                this.wxy.setPosition(obj.n, this.wxy.position.y);
              }
            }).start();
          }, this);
          this.myAnimation();
        }

        update(deltaTime) {}

        myAnimation() {
          const obj = {
            n: 0
          };
          const comp = this.rLabelNode.getComponent(Label);
          tween(obj).to(0.5, {
            n: 200
          }, {
            onUpdate: (target, ratio) => {
              comp.string = String(obj.n); // 在回调函数内部的 this 上下文会发生变化，因此需要采取措施来确保 this 引用的正确性。
              // 在你的 onUpdate 回调内部，this 可能不会引用到你期望的对象。

              this.wxy.setPosition(this.wxy.position.x, obj.n); // 使用 => 使用箭头函数将 this 绑定到你的函数内
            },
            easing: 'quadOut' // 缓动曲线为弹性曲线

          }).to(0.5, {
            n: 0
          }, {
            onUpdate: (target, ratio) => {
              comp.string = String(obj.n);
              this.wxy.setPosition(this.wxy.position.x, obj.n);
            },
            easing: 'quadIn' // 缓动曲线为弹性曲线

          }).union().repeatForever().start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonLeft", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonRight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wxy", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rLabelNode", [_dec5], {
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
//# sourceMappingURL=25e7b6a1cd51f892329bdc63f1d07409f1f667c7.js.map