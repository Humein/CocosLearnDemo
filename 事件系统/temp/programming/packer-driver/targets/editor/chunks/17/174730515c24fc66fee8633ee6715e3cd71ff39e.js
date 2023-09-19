System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, Node, v3, _dec, _class, _crd, ccclass, property, item_pic_nodeEvent;

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

      _export("item_pic_nodeEvent", item_pic_nodeEvent = (_dec = ccclass('item_pic_nodeEvent'), _dec(_class = class item_pic_nodeEvent extends Component {
        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchAllStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        update(deltaTime) {} // event: EventTouch


        onTouchStart(event) {
          const uiPos = event.getUILocation();
          console.log("onTouchStart");
          this.node.setScale(1.2, 1.2); // 转换坐标并进行移动

          const transform = this.node.getComponent(UITransform);
          const nodePos = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y, 0));

          if (nodePos.x > 0) {
            // 右半侧
            this.node.setPosition(this.node.position.x + 50, this.node.position.y, 0);
          } else {
            this.node.setPosition(this.node.position.x - 50, this.node.position.y, 0);
          }
        }

        onTouchAllStart(event) {
          this.node.setScale(1.2, 1.2);
          const touchPos = event.getUILocation();
          const nodePos = this.node.getPosition();
          console.log("onTouchStart"); // 计算点击位置与节点中心的相对偏移

          const deltaX = touchPos.x - nodePos.x;
          const deltaY = touchPos.y - nodePos.y; // 根据偏移量来判断移动方向

          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // 横向移动较大，左右移动
            if (deltaX > 0) {
              // 向右移动
              this.node.setPosition(this.node.position.x + 50, this.node.position.y, 0);
            } else {
              // 向左移动
              this.node.setPosition(this.node.position.x - 50, this.node.position.y, 0);
            }
          } else {
            // 纵向移动较大，上下移动
            if (deltaY > 0) {
              // 向上移动
              this.node.setPosition(this.node.position.x, this.node.position.y + 50, 0);
            } else {
              // 向下移动
              this.node.setPosition(this.node.position.x, this.node.position.y - 50, 0);
            }
          }
        }

        onTouchMove(event) {
          console.log("onTouchMove");
          const delta = event.getUIDelta();
          const dx = delta.x;
          const dy = delta.y;
          const x = this.node.position.x + dx;
          const y = this.node.position.y + dy;
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=174730515c24fc66fee8633ee6715e3cd71ff39e.js.map