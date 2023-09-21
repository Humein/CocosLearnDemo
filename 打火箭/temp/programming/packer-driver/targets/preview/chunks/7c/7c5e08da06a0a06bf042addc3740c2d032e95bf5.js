System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, KeyCode, Prefab, instantiate, Collider2D, Contact2DType, director, Director, tween, Label, Vec3, Color, PhysicsSystem2D, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, PHY_GROUP, GameRoot;

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
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac2ffn6UQFKWredUQrO5X0p", "GameRoot", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventKeyboard', 'Node', 'input', 'Input', 'KeyCode', 'Prefab', 'instantiate', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'director', 'Director', 'tween', 'Label', 'Vec3', 'Color', 'PhysicsSystem2D']);

      ({
        ccclass,
        property
      } = _decorator);

      PHY_GROUP = /*#__PURE__*/function (PHY_GROUP) {
        PHY_GROUP[PHY_GROUP["DEFAULT"] = 1] = "DEFAULT";
        PHY_GROUP[PHY_GROUP["SELF_PLANE"] = 2] = "SELF_PLANE";
        PHY_GROUP[PHY_GROUP["ENEMY_PLANE"] = 4] = "ENEMY_PLANE";
        PHY_GROUP[PHY_GROUP["SELF_BULLET"] = 8] = "SELF_BULLET";
        PHY_GROUP[PHY_GROUP["ENEMY_BULLET"] = 16] = "ENEMY_BULLET";
        PHY_GROUP[PHY_GROUP["BULLET_PROP"] = 32] = "BULLET_PROP";
        return PHY_GROUP;
      }(PHY_GROUP || {});

      ;

      _export("GameRoot", GameRoot = (_dec = ccclass('GameRoot'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Label), _dec(_class = (_class2 = class GameRoot extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "player", _descriptor, this);

          _initializerDefineProperty(this, "hensRoot", _descriptor2, this);

          _initializerDefineProperty(this, "eggsRoot", _descriptor3, this);

          _initializerDefineProperty(this, "eggPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "ufoHitRoot", _descriptor5, this);

          _initializerDefineProperty(this, "ufoSingleHit", _descriptor6, this);

          _initializerDefineProperty(this, "ufoDoubleHit", _descriptor7, this);

          _initializerDefineProperty(this, "scoreLabel", _descriptor8, this);

          // 在组件的属性中声明按键状态
          _initializerDefineProperty(this, "isDPressed", _descriptor9, this);

          _initializerDefineProperty(this, "isWPressed", _descriptor10, this);

          _initializerDefineProperty(this, "isAPressed", _descriptor11, this);

          this.playerPosIndex = 0;
          this.hensPosXArr = [];
          this.ufoPosXArr = [];
          this.playScore = 0;
          this.playHp = 3;
        }

        // LIFE-CYCLE CALLBACKS:
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
        }

        onLoad() {
          director.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          director.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onDestroy() {
          director.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          director.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        } // Init Data


        initData() {
          // hens每个子元素的X坐标
          for (var i = 0; i < this.hensRoot.children.length; i++) {
            var element = this.hensRoot.children[i]; // hens每个子元素的X坐标就是player的移动范围

            this.hensPosXArr[i] = element.position.x - 30;
          } // player初始位置


          var targetX = this.hensPosXArr[0];
          var targetY = -window.innerHeight / 2 + 100;
          this.player.setPosition(targetX, targetY, 0); // 初始化分数

          var color = new Vec3(255, 255, 255);
          tween(color).to(2, {
            x: 10,
            y: 150,
            z: 0
          }, {
            onUpdate: (target, ratio) => {
              this.scoreLabel.color = new Color(color.x, color.y, color.z);
            }
          }).to(2, {
            x: 120,
            y: 0,
            z: 100
          }, {
            onUpdate: (target, ratio) => {
              this.scoreLabel.color = new Color(color.x, color.y, color.z);
            }
          }).union().repeatForever().start();
          this.updateScore();
        } // Init Prefab


        startCreateEggs() {
          this.schedule(() => {
            // 生产egg
            var egg = instantiate(this.eggPrefab); // 为预制体设置碰撞组

            var eggsRootCollider = egg.getComponent(Collider2D);
            eggsRootCollider.group = PHY_GROUP.DEFAULT;
            this.eggsRoot.addChild(egg); // 配置egg的位置

            var targetX = this.hensPosXArr[Math.floor(Math.random() * this.hensPosXArr.length)];
            var targetY = this.hensRoot.position.y - 80;
            egg.setPosition(targetX, targetY, 0);
          }, 1); // 生产Car

          this.schedule(() => {
            var randomPrefab = Math.random() < 0.5 ? this.ufoSingleHit : this.ufoDoubleHit;
            var targetX = 0;
            var targetY = 0;
            var ufo = instantiate(randomPrefab); // 为不同种类的预制体设置碰撞组

            var ufoCollider = ufo.getComponent(Collider2D);

            if (randomPrefab === this.ufoSingleHit) {
              ufoCollider.group = PHY_GROUP.BULLET_PROP;
            } else {
              ufoCollider.group = PHY_GROUP.DEFAULT;
            }

            this.ufoHitRoot.addChild(ufo); // XXTODO 预制体之间间距默认是80，但是 ufoDoubleHit与其他预制体包括它自己的间距是:120

            ufo.setPosition(targetX, targetY, 0);
          }, 3);
        } // Init big bang


        openColloder2DEvent() {
          // 设置分组
          // 获取 this.player 上的碰撞组件
          var playerCollider = this.player.getComponent(Collider2D);
          playerCollider.group = PHY_GROUP.DEFAULT; // 处理碰撞逻辑

          var comp = this.player.getComponent(Collider2D);
          comp == null ? void 0 : comp.on(Contact2DType.BEGIN_CONTACT, (selfCollider, otherCollider, contact) => {
            console.log('碰撞开始'); // 获取碰撞对象的节点

            var otherNode = otherCollider.node;
            console.log(otherNode.name); // 检查碰撞对象是否是 eggsRoot

            if (otherNode === this.eggsRoot) {
              console.log('player 碰到了 eggsRoot'); // 执行 eggsRoot 相关的处理逻辑
            } // 检查碰撞对象是否是 ufoHitRoot


            if (otherNode === this.ufoHitRoot) {
              console.log('player 碰到了 ufoHitRoot'); // 执行 ufoHitRoot 相关的处理逻辑
            }

            this.updateScoreLabel(); // 在下一帧的物理模拟之后销毁物体

            director.once(Director.EVENT_AFTER_PHYSICS, () => {
              otherCollider.node.destroy();
            }, this);
          }, this); // 注册全局碰撞回调函数

          if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          console.log('onBeginContact');
        }

        onEndContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体结束接触时被调用一次
          console.log('onEndContact');
        }

        onPreSolve(selfCollider, otherCollider, contact) {
          // 每次将要处理碰撞体接触逻辑时被调用
          console.log('onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {
          // 每次处理完碰撞体接触逻辑时被调用
          console.log('onPostSolve');
        } // Event bigBang 


        updateScoreLabel() {
          this.playScore += 1;
          this.updateScore();
        } // Event input Handlers


        openInputEvent() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.movePlayer(-1);
              this.isAPressed = true;
              break;

            case KeyCode.KEY_D:
              this.movePlayer(1);
              this.isDPressed = true;
              break;

            case KeyCode.KEY_W:
              this.jumpUPAnimation();
              this.isWPressed = true;
              break;

            default:
              break;
          } // 同时按下了 KEY_D 和 KEY_W


          if (this.isDPressed && this.isWPressed) {
            this.jumpUPAnimation();
          }

          if (this.isAPressed && this.isWPressed) {
            this.jumpUPAnimation();
          }
        }

        onKeyUp(event) {
          if (this.isDPressed && this.isWPressed) {
            this.jumpDownAnimation(1);
          }

          if (this.isAPressed && this.isWPressed) {
            this.jumpDownAnimation(-1);
          }

          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.isAPressed = false;
              break;

            case KeyCode.KEY_D:
              this.isDPressed = false;
              break;

            case KeyCode.KEY_W:
              this.isWPressed = false;
              break;

            default:
              break;
          }
        } // Event Handlers


        movePlayer(dir) {
          if (this.isDPressed && this.isWPressed) {
            return;
          }

          if (this.isAPressed && this.isWPressed) {
            return;
          }

          this.makeMoveStepIndex(dir);
          var targetX = this.hensPosXArr[this.playerPosIndex];
          var targetY = this.player.position.y;
          this.player.setPosition(targetX, targetY, 0);
        }

        makeMoveStepIndex(dir) {
          this.playerPosIndex += dir;

          if (this.playerPosIndex < 0) {
            this.playerPosIndex = 0;
          }

          if (this.playerPosIndex > this.hensPosXArr.length - 1) {
            this.playerPosIndex = this.hensPosXArr.length - 1;
          }

          console.log('this.playerPosIndex', this.playerPosIndex);
        } // Animation


        jumpUPAnimation() {
          this.player.setScale(1.2, 1.2, 1.2);
          var y = -window.innerHeight / 2 + 100;
          var obj = {
            n: y
          };
          tween(obj).to(0.5, {
            n: 20
          }, {
            onUpdate: (target, ratio) => {
              this.player.setPosition(this.player.position.x, obj.n);
            },
            easing: 'quadOut' // 缓动曲线为弹性曲线

          }).to(0.5, {
            n: y
          }, {
            onUpdate: (target, ratio) => {
              this.player.setPosition(this.player.position.x, obj.n);
            },
            easing: 'quadIn'
          }).union().repeat(1).start();
        }

        jumpDownAnimation(dir) {
          this.makeMoveStepIndex(dir);
          var jumpX = dir === 1 ? 80 : -80;
          this.player.setScale(1, 1, 1);
          var obj = {
            n: this.player.position.x
          };
          tween(obj).to(.5, {
            n: this.player.position.x + jumpX
          }, {
            onUpdate: (target, ratio) => {
              this.player.setPosition(obj.n, this.player.position.y);
            }
          }).start();
        } // Private Method


        updateScore() {
          this.scoreLabel.string = this.playScore + " \u5206";
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "isDPressed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "isWPressed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "isAPressed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c5e08da06a0a06bf042addc3740c2d032e95bf5.js.map