import { _decorator, Component, EventKeyboard, Node, input, Input, KeyCode, Prefab, instantiate, Collider2D, Contact2DType, IPhysics2DContact, director, Director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameRoot')
export class GameRoot extends Component {
    @property(Node) player: Node = null!;
    @property(Node) hensRoot: Node = null!;
    @property(Node) eggsRoot: Node = null!;
    @property(Prefab) eggPrefab: Prefab = null!;

    playerPosIndex = 0;
    hensPosXArr = []

    start() {
        this.initData();
        this.openInputEvent();
        this.startCreateEggs();
        this.openColloder2DEvent();
    }

    update(deltaTime: number) {
        for (let i = 0; i < this.eggsRoot.children.length; i++) {
            const element = this.eggsRoot.children[i];
            const x = element.position.x;
            // 下落速度
            const y = element.position.y - 150 * deltaTime;
            element.setPosition(x, y, 0);
            if (y < -500) {
                element.destroy();
            }
        }
    }

    // Init Data
    initData() {
        // hens每个子元素的X坐标
        for (let i = 0; i < this.hensRoot.children.length; i++) {
            const element = this.hensRoot.children[i];
            // hens每个子元素的X坐标就是player的移动范围
            this.hensPosXArr[i] = element.position.x - 30;
        }
        // player初始位置
        const targetX = this.hensPosXArr[0];
        const targetY = this.player.position.y;
        this.player.setPosition(targetX, targetY, 0);
    }

    // Init Prefab
    startCreateEggs() {
        this.schedule(() => {
            const egg = instantiate(this.eggPrefab);
            this.eggsRoot.addChild(egg);
            const targetX = this.hensPosXArr[Math.floor(Math.random() * this.hensPosXArr.length)];
            const targetY = this.hensRoot.position.y - 80 
            egg.setPosition(targetX, targetY, 0);
        }, 1);
    }

    // Init big bang
    openColloder2DEvent() {
        const comp = this.player.getComponent(Collider2D);
        comp?.on(Contact2DType.BEGIN_CONTACT, (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) => {
            console.log('碰撞开始');
            director.once(Director.EVENT_AFTER_PHYSICS, () => {
                otherCollider.node.destroy();
            }, this);
        }, this)
    }

    // Event Handlers
    openInputEvent() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.movePlayer(-1);
                break;
            case KeyCode.KEY_D:
                this.movePlayer(1);
                break;
            default:
                break;
        }
    }
    movePlayer(dir: 1 | -1) {
        this.playerPosIndex += dir;
        if (this.playerPosIndex < 0) {
            this.playerPosIndex = 0 
        }
        if (this.playerPosIndex > this.hensPosXArr.length - 1) {
            this.playerPosIndex = this.hensPosXArr.length - 1
        }
        const targetX = this.hensPosXArr[this.playerPosIndex];
        const targetY = this.player.position.y;
        this.player.setPosition(targetX, targetY, 0);
    }
      
}

