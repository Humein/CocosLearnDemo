System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, item_pic_nodeEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd095I9EjVFiLit0+SIvtQx", "item_pic_nodeEvent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("item_pic_nodeEvent", item_pic_nodeEvent = (_dec = ccclass('item_pic_nodeEvent'), _dec(_class = class item_pic_nodeEvent extends Component {
        start() {
          this.node.on(Node.EventType.TOUCH_START, event => {
            var uiPos = event.getUILocation();
            console.log("onTouchStart");
            this.node.setScale(1.2, 1.2);
          }, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        update(deltaTime) {} // event: EventTouch


        onTouchStart(event) {
          var uiPos = event.getUILocation();
          console.log("onTouchStart");
          this.node.setScale(1.2, 1.2);
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09057d645ede2830979ca2d308e5084b9f964729.js.map