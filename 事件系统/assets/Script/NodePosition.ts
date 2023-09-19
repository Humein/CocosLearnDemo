import { _decorator, Component, Node, randomRange } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodePosition')
export class NodePosition extends Component {
    start() {
        console.log("this.node.position");
        console.log(this.node.position);
        this.node.setPosition(50, 120, 0);
        console.log(this.node.position);
    }

    update(deltaTime: number) {
        this.node.setPosition(randomRange(0,50), randomRange(0, 100), 0);
 
    }
}

