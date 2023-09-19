import { _decorator, Component, EventTouch, UITransform, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('item_pic_nodeEvent')
export class item_pic_nodeEvent extends Component {
    @property
    moveSpeed: number = 200; // 移动速度



    start() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchAllStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    update(deltaTime: number) {
        
    }

    // event: EventTouch
    onTouchStart(event: EventTouch) {
        const uiPos = event.getUILocation();
        console.log("onTouchStart");
        this.node.setScale(1.2, 1.2);

        // 转换坐标并进行移动
        const transform = this.node.getComponent(UITransform);
        const nodePos = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y, 0));
        if (nodePos.x > 0) {
            // 右半侧
            this.node.setPosition(this.node.position.x + 50 , this.node.position.y, 0);
        }else {
            this.node.setPosition(this.node.position.x - 50 , this.node.position.y, 0);
        }
    }

    // 支持上下左右移动
    onTouchAllStart(event: EventTouch){
        const uiPos = event.getUILocation();
        console.log("onTouchStart");
        this.node.setScale(1.2, 1.2);
    
        // 转换坐标并进行移动
        const transform = this.node.getComponent(UITransform);
        const nodePos = transform.convertToNodeSpaceAR(v3(uiPos.x, uiPos.y, 0));
    
        // 定义边缘触发范围的宽度
        const edgeWidth = 40;
    
        // 检查触摸点是否在节点的边缘范围内
        if (
            nodePos.x > -edgeWidth && 
            nodePos.x < edgeWidth &&
            nodePos.y > -edgeWidth &&
            nodePos.y < edgeWidth
        ) {
            // 在边缘范围内，触发移动
            const moveSpeed = this.moveSpeed; // 获取移动速度
            const newPosition = this.node.position.clone();
    
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

    onTouchMove(event: EventTouch) {
        console.log("onTouchMove");

        const delta = event.getUIDelta();
        const dx = delta.x;
        const dy = delta.y;
        const x = this.node.position.x + dx;
        const y = this.node.position.y + dy;
        this.node.setPosition(x, y);
    } 
    
    onTouchEnd(event: EventTouch) {
        console.log("onTouchEnd");
        this.node.setScale(1, 1);

    }

    onTouchCancel(event: EventTouch) {
        console.log("onTouchCancel");
        this.node.setScale(1, 1);
    }
}

