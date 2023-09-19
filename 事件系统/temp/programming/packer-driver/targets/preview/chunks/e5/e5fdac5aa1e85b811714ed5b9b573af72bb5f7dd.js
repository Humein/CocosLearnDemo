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
            console.log("TOUCH_START");
            console.log(event);
          }, this);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e5fdac5aa1e85b811714ed5b9b573af72bb5f7dd.js.map