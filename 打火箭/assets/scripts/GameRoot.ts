import { _decorator, Component, EventKeyboard, Node, input, Input, KeyCode, Prefab, instantiate, Collider2D, Contact2DType, IPhysics2DContact, director, Director, tween} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameRoot')
export class GameRoot extends Component {
    @property(Node) player: Node = null!;
    @property(Node) hensRoot: Node = null!;
    @property(Node) eggsRoot: Node = null!;
    @property(Prefab) eggPrefab: Prefab = null!;
    @property(Node) ufoHitRoot: Node = null!;
    @property(Prefab) ufoSingleHit: Prefab = null!;
    @property(Prefab) ufoDoubleHit: Prefab = null!;

    // 在组件的属性中声明按键状态
    @property
    private isDPressed: boolean = false;
    @property
    private isWPressed: boolean = false;
    @property
    private isAPressed: boolean = false;

    playerPosIndex = 0;
    hensPosXArr = []
    ufoPosXArr = []

    // LIFE-CYCLE CALLBACKS:
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
            if (y < -window.innerHeight) {
                element.destroy();
            }
        }

        for (let i = 0; i < this.ufoHitRoot.children.length; i++) {
            const element = this.ufoHitRoot.children[i];
            const x = element.position.x - 150 * deltaTime;;
            const y = element.position.y; 
            element.setPosition(x, y, 0);
            if (x < -window.innerWidth) {
                element.destroy();
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
        const targetY = -window.innerHeight/2 + 100;
        this.player.setPosition(targetX, targetY, 0);
    }

    // Init Prefab
    startCreateEggs() {
        this.schedule(() => {
            // 生产egg
            const egg = instantiate(this.eggPrefab);
            this.eggsRoot.addChild(egg);
            // 配置egg的位置
            const targetX = this.hensPosXArr[Math.floor(Math.random() * this.hensPosXArr.length)];
            const targetY = this.hensRoot.position.y - 80 
            egg.setPosition(targetX, targetY, 0);
        }, 1);

        // 生产Car
        this.schedule(() => {
            const randomPrefab = Math.random() < 0.5 ? this.ufoSingleHit : this.ufoDoubleHit;
            const targetX = 0;
            const targetY = 0;
            const ufo = instantiate(randomPrefab);
            this.ufoHitRoot.addChild(ufo);
            // XXTODO 预制体之间间距默认是80，但是 ufoDoubleHit与其他预制体包括它自己的间距是:120
            ufo.setPosition(targetX, targetY, 0);
        }, 3);
        
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

    // Event input Handlers
    openInputEvent() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }
    onKeyDown(event: EventKeyboard) {
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
                this.isWPressed = true;
                break;
            default:
                break;
        }
        // 同时按下了 KEY_D 和 KEY_W
        if (this.isDPressed && this.isWPressed) {
           this.jumpUPAnimation();
        }
        if (this.isAPressed && this.isWPressed) {
            this.jumpUPAnimation();
        }
    }

    onKeyUp(event: EventKeyboard) {
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
    }
   
    // Event Handlers
    movePlayer(dir: 1 | -1) {
        if (this.isDPressed && this.isWPressed) {
            return;
         }
         if (this.isAPressed && this.isWPressed) {
            return;
         }
        this.makeMoveStepIndex(dir);
        const targetX = this.hensPosXArr[this.playerPosIndex];
        const targetY = this.player.position.y;
        this.player.setPosition(targetX, targetY, 0);
    }

    makeMoveStepIndex(dir: 1 | -1){
        this.playerPosIndex += dir;
        if (this.playerPosIndex < 0) {
            this.playerPosIndex = 0 
        }
        if (this.playerPosIndex > this.hensPosXArr.length - 1) {
            this.playerPosIndex = this.hensPosXArr.length - 1
        }
        console.log('this.playerPosIndex', this.playerPosIndex);
    }

    // Animation
    jumpUPAnimation() {
        this.player.setScale(1.2, 1.2, 1.2);
        const y = -window.innerHeight/2 + 100;
        const obj = {
            n: y
        }   
        tween(obj)
            .to(0.5, {n: 20}, {
                onUpdate: (target, ratio) => {
                    this.player.setPosition(this.player.position.x, obj.n);
                },
                easing: 'quadOut' // 缓动曲线为弹性曲线
            })
            .to(0.5, {n: y}, {
                onUpdate: (target, ratio) => {
                    this.player.setPosition(this.player.position.x, obj.n); 
                },
                easing: 'quadIn'
            })
            .union()
            .repeat(1)
            .start();
    }

    jumpDownAnimation(dir: 1 | -1) {
        this.makeMoveStepIndex(dir);
        const jumpX = dir === 1 ? 80 : -80;
        this.player.setScale(1, 1, 1);
        const obj = {
            n: this.player.position.x
        }
        tween(obj)
        .to(.5, {n: this.player.position.x + jumpX}, {
            onUpdate: (target, ratio) => {
                this.player.setPosition(obj.n, this.player.position.y);
            }
        })
        .start();
    }
      
}

