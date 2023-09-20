System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, KeyCode, Prefab, instantiate, Collider2D, Contact2DType, director, Director, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, GameRoot;

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
      Node = _cc.Node;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      director = _cc.director;
      Director = _cc.Director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac2ffn6UQFKWredUQrO5X0p", "GameRoot", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'Node', 'input', 'Input', 'KeyCode', 'Prefab', 'instantiate', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'director', 'Director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameRoot", GameRoot = (_dec = ccclass('GameRoot'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec(_class = (_class2 = class GameRoot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "player", _descriptor, this);

          _initializerDefineProperty(this, "hensRoot", _descriptor2, this);

          _initializerDefineProperty(this, "eggsRoot", _descriptor3, this);

          _initializerDefineProperty(this, "eggPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "ufoHit", _descriptor5, this);

          this.playerPosIndex = 0;
          this.hensPosXArr = [];
        }

        start() {
          this.initData();
          this.openInputEvent();
          this.startCreateEggs();
          this.openColloder2DEvent();
        }

        update(deltaTime) {
          for (let i = 0; i < this.eggsRoot.children.length; i++) {
            const element = this.eggsRoot.children[i];
            const x = element.position.x; // 下落速度

            const y = element.position.y - 150 * deltaTime;
            element.setPosition(x, y, 0);

            if (y < -500) {
              element.destroy();
            }
          }
        } // Init Data


        initData() {
          // hens每个子元素的X坐标
          for (let i = 0; i < this.hensRoot.children.length; i++) {
            const element = this.hensRoot.children[i]; // hens每个子元素的X坐标就是player的移动范围

            this.hensPosXArr[i] = element.position.x - 30;
          } // player初始位置


          const targetX = this.hensPosXArr[0];
          const targetY = 50;
          this.player.setPosition(targetX, targetY, 0);
        } // Init Prefab


        startCreateEggs() {
          this.schedule(() => {
            const egg = instantiate(this.eggPrefab);
            this.eggsRoot.addChild(egg);
          }, 1); // this.schedule(() => {
          //     const ufo = instantiate(this.ufoHit);
          //     this.eggsRoot.addChild(ufo);
          //     const targetX = this.player.position.x - 30;
          //     const targetY = this.player.position.y
          //     ufo.setPosition(targetX, targetY, 0);
          // }, 1);
        } // Init big bang


        openColloder2DEvent() {
          const comp = this.player.getComponent(Collider2D);
          comp == null ? void 0 : comp.on(Contact2DType.BEGIN_CONTACT, (selfCollider, otherCollider, contact) => {
            console.log('碰撞开始');
            director.once(Director.EVENT_AFTER_PHYSICS, () => {
              otherCollider.node.destroy();
            }, this);
          }, this);
        } // Event Handlers


        openInputEvent() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.movePlayer(-1);
              break;

            case KeyCode.KEY_D:
              this.movePlayer(1);
              break;

            default:
              break;
          }
        }

        movePlayer(dir) {
          this.playerPosIndex += dir;

          if (this.playerPosIndex < 0) {
            this.playerPosIndex = 0;
          }

          if (this.playerPosIndex > this.hensPosXArr.length - 1) {
            this.playerPosIndex = this.hensPosXArr.length - 1;
          }

          const targetX = this.hensPosXArr[this.playerPosIndex];
          const targetY = this.player.position.y;
          this.player.setPosition(targetX, targetY, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hensRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "eggsRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "eggPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ufoHit", [_dec6], {
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
//# sourceMappingURL=fd98df4a13770ce760154d33ef6a5a674fd6320f.js.map