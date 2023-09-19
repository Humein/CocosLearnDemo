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
            const uiPos = event.getUILocation();
            console.log("onTouchStart");
          }, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        update(deltaTime) {} // event: EventTouch


        onTouchStart(event) {
          const uiPos = event.getUILocation();
          console.log("onTouchStart");
        }

        onTouchMove(event) {
          console.log("onTouchMove");
        }

        onTouchEnd(event) {
          console.log("onTouchEnd");
        }

        onTouchCancel(event) {
          console.log("onTouchCancel");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7601d88fb71004af71dba8e0e2401beb70c313f.js.map