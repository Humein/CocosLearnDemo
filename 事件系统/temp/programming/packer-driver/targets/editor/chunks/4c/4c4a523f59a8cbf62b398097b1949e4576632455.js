System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, NodePosition;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78dd1+Lx5ZIEpd+qMtHamuK", "NodePosition", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodePosition", NodePosition = (_dec = ccclass('NodePosition'), _dec(_class = class NodePosition extends Component {
        start() {
          console.log("this.node.position");
          console.log(this.node.position);
          this.node.setPosition(50, 120, 0);
          console.log(this.node.position);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c4a523f59a8cbf62b398097b1949e4576632455.js.map