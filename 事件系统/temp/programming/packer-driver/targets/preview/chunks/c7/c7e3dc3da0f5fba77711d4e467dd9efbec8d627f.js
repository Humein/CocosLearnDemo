System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, Node, v3, _dec, _class, _class2, _descriptor, _crd, ccclass, property, item_pic_nodeEvent;

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
      UITransform = _cc.UITransform;
      Node = _cc.Node;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd095I9EjVFiLit0+SIvtQx", "item_pic_nodeEvent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'UITransform', 'Node', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("item_pic_nodeEvent", item_pic_nodeEvent = (_dec = ccclass('item_pic_nodeEvent'), _dec(_class = (_class2 = class item_pic_nodeEvent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);
        }

        // 移动速度
        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchAllStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        update(deltaTime) {} // event: EventTouch


        onTouchStart(event) {
          var uiPos = event.getUILocation();
          console.log("onTouchStart");
          this.node.setScale(1.2, 1.2); // 转换坐标并进行移动

          var transform = this.node.getComponent(UITransform);
          var nodePos = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y, 0));

          if (nodePos.x > 0) {
            // 右半侧
            this.node.setPosition(this.node.position.x + 50, this.node.position.y, 0);
          } else {
            this.node.setPosition(this.node.position.x - 50, this.node.position.y, 0);
          }
        } // 支持上下左右移动


        onTouchAllStart(event) {
          var uiPos = event.getUILocation();
          console.log("onTouchStart");
          this.node.setScale(1.2, 1.2); // 转换坐标并进行移动

          var transform = this.node.getComponent(UITransform);
          var nodePos = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y, 0)); // 定义边缘触发范围的宽度

          var edgeWidth = 40; // 检查触摸点是否在节点的边缘范围内

          if (nodePos.x > -edgeWidth && nodePos.x < edgeWidth && nodePos.y > -edgeWidth && nodePos.y < edgeWidth) {
            // 在边缘范围内，触发移动
            var moveSpeed = this.moveSpeed; // 获取移动速度

            var newPosition = this.node.position.clone();

            if (Math.abs(nodePos.x) > Math.abs(nodePos.y)) {
              // 横向位移大于纵向位移，左右移动
              if (nodePos.x > 0) {
                newPosition.x += moveSpeed;
              } else {
                newPosition.x -= moveSpeed;
              }
            } else {
              // 纵向位移大于横向位移，上下移动
              if (nodePos.y > 0) {
                newPosition.y += moveSpeed;
              } else {
                newPosition.y -= moveSpeed;
              }
            }

            this.node.setPosition(newPosition);
          }
        }

        onTouchMove(event) {
          console.log("onTouchMove");
          var delta = event.getUIDelta();
          var dx = delta.x;
          var dy = delta.y;
          var x = this.node.position.x + dx;
          var y = this.node.position.y + dy;
          this.node.setPosition(x, y);
        }

        onTouchEnd(event) {
          console.log("onTouchEnd");
          this.node.setScale(1, 1);
        }

        onTouchCancel(event) {
          console.log("onTouchCancel");
          this.node.setScale(1, 1);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7e3dc3da0f5fba77711d4e467dd9efbec8d627f.js.map