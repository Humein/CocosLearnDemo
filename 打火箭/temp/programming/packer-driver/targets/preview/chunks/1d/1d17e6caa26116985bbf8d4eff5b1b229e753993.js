System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, KeyCode, Prefab, instantiate, Collider2D, Contact2DType, director, Director, tween, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, GameRoot;

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
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac2ffn6UQFKWredUQrO5X0p", "GameRoot", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'Node', 'input', 'Input', 'KeyCode', 'Prefab', 'instantiate', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'director', 'Director', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameRoot", GameRoot = (_dec = ccclass('GameRoot'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec(_class = (_class2 = class GameRoot extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "player", _descriptor, this);

          _initializerDefineProperty(this, "hensRoot", _descriptor2, this);

          _initializerDefineProperty(this, "eggsRoot", _descriptor3, this);

          _initializerDefineProperty(this, "eggPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "ufoHitRoot", _descriptor5, this);

          _initializerDefineProperty(this, "ufoSingleHit", _descriptor6, this);

          _initializerDefineProperty(this, "ufoDoubleHit", _descriptor7, this);

          this.playerPosIndex = 0;
          this.hensPosXArr = [];
          this.ufoPosXArr = [];
        }

        start() {
          this.initData();
          this.openInputEvent();
          this.startCreateEggs();
          this.openColloder2DEvent();
        }

        update(deltaTime) {
          for (var i = 0; i < this.eggsRoot.children.length; i++) {
            var element = this.eggsRoot.children[i];
            var x = element.position.x; // 下落速度

            var y = element.position.y - 150 * deltaTime;
            element.setPosition(x, y, 0);

            if (y < -window.innerHeight) {
              element.destroy();
            }
          }

          for (var _i = 0; _i < this.ufoHitRoot.children.length; _i++) {
            var _element = this.ufoHitRoot.children[_i];

            var _x = _element.position.x - 150 * deltaTime;

            ;
            var _y = _element.position.y;

            _element.setPosition(_x, _y, 0);

            if (_x < -window.innerWidth) {
              _element.destroy();
            }
          }
        } // Init Data


        initData() {
          // hens每个子元素的X坐标
          for (var i = 0; i < this.hensRoot.children.length; i++) {
            var element = this.hensRoot.children[i]; // hens每个子元素的X坐标就是player的移动范围

            this.hensPosXArr[i] = element.position.x - 30;
          } // player初始位置


          var targetX = this.hensPosXArr[0];
          var targetY = this.player.position.y;
          this.player.setPosition(targetX, targetY, 0);
        } // Init Prefab


        startCreateEggs() {
          this.schedule(() => {
            // 生产egg
            var egg = instantiate(this.eggPrefab);
            this.eggsRoot.addChild(egg); // 配置egg的位置

            var targetX = this.hensPosXArr[Math.floor(Math.random() * this.hensPosXArr.length)];
            var targetY = this.hensRoot.position.y - 80;
            egg.setPosition(targetX, targetY, 0);
          }, 1); // 生产Car

          this.schedule(() => {
            var randomPrefab = Math.random() < 0.5 ? this.ufoSingleHit : this.ufoDoubleHit;
            var targetX = 0;
            var targetY = 0;
            var ufo = instantiate(randomPrefab);
            this.ufoHitRoot.addChild(ufo); // XXTODO 预制体之间间距默认是80，但是 ufoDoubleHit与其他预制体包括它自己的间距是:120

            ufo.setPosition(targetX, targetY, 0);
          }, 1);
        } // Init big bang


        openColloder2DEvent() {
          var comp = this.player.getComponent(Collider2D);
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

            case KeyCode.KEY_W:
              this.jumpPlayer();
              break;

            default:
              break;
          }
        }

        jumpPlayer() {
          this.player.setScale(1.2, 1.2, 1.2);
          this.myAnimation();
        }

        movePlayer(dir) {
          this.playerPosIndex += dir;

          if (this.playerPosIndex < 0) {
            this.playerPosIndex = 0;
          }

          if (this.playerPosIndex > this.hensPosXArr.length - 1) {
            this.playerPosIndex = this.hensPosXArr.length - 1;
          }

          var targetX = this.hensPosXArr[this.playerPosIndex];
          var targetY = this.player.position.y;
          this.player.setPosition(targetX, targetY, 0);
        } // Animation


        myAnimation() {
          var obj = {
            n: 0
          };
          tween(obj).to(0.5, {
            n: 100
          }, {
            onUpdate: (target, ratio) => {
              // 在回调函数内部的 this 上下文会发生变化，因此需要采取措施来确保 this 引用的正确性。
              // 在你的 onUpdate 回调内部，this 可能不会引用到你期望的对象。
              this.player.setPosition(this.player.position.x, obj.n); // 使用 => 使用箭头函数将 this 绑定到你的函数内
            },
            easing: 'quadOut' // 缓动曲线为弹性曲线

          }).to(0.5, {
            n: 0
          }, {
            onUpdate: (target, ratio) => {
              this.player.setPosition(this.player.position.x, obj.n);
            },
            easing: 'quadIn' // 缓动曲线为弹性曲线

          }).union().repeat(1).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hensRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "eggsRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "eggPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ufoHitRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ufoSingleHit", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ufoDoubleHit", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d17e6caa26116985bbf8d4eff5b1b229e753993.js.map