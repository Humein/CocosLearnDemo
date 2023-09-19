import { _decorator, Color, Component, Label, Node, Sprite, tween, v3, Vec3} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameRoot')
export class GameRoot extends Component {
    @property(Node) buttonLeft: Node = null;
    @property(Node) buttonRight: Node = null;

    @property(Node) wxy: Node;
    @property(Label) rLabelNode: Label = null;

    start() {
        // 获取 rLabelNode 的 cc.Sprite 组件
        const lSprite = this.buttonLeft.getComponent(Sprite);
        const rSprite = this.buttonRight.getComponent(Sprite);

        // 将背景颜色应用到 cc.Sprite 组件的 Material
        lSprite.color = new Color(255, 0, 0); // 这里设置为红色;
        rSprite.color = new Color(0, 255, 0); // 这里设置为绿色;


        const color = new Vec3(255, 255, 255);
        tween(color)
        .to(2, {x: 10, y: 150, z: 0}, {
            onUpdate: (target, ratio) => {
                this.rLabelNode.color = new Color(color.x, color.y, color.z);
            }
        })
        .to(2, {x: 120, y: 0, z: 100}, {
            onUpdate: (target, ratio) => {
                this.rLabelNode.color = new Color(color.x, color.y, color.z);
            }
        })
        .union()
        .repeatForever()
        .start();


        this.buttonLeft.on(Node.EventType.TOUCH_START, () => {
            this.buttonLeft.setScale(1.2, 1.2, 1.2);
        });


        this.buttonLeft.on(Node.EventType.TOUCH_END, () => {
            this.buttonLeft.setScale(1, 1, 1);
            const obj = {
                n: this.wxy.position.x
            }
            tween(obj)
            .to(1, {n: this.wxy.position.x - 50}, {
                onUpdate: (target, ratio) => {
                    this.wxy.setPosition(obj.n, this.wxy.position.y);                }
            })
            .start();
        }, this);

        this.buttonRight.on(Node.EventType.TOUCH_START, () => {
            this.buttonRight.setScale(1.2, 1.2, 1.2);
            this.myAnimation();

        });

        this.buttonRight.on(Node.EventType.TOUCH_END, () => {
            this.buttonRight.setScale(1, 1, 1);
            const obj = {
                n: this.wxy.position.x
            }
            tween(obj)
            .to(1, {n: this.wxy.position.x + 50}, {
                onUpdate: (target, ratio) => {
                    this.wxy.setPosition(obj.n, this.wxy.position.y);
                }
            })
            .start();
        }, this);


    }

    update(deltaTime: number) {
        
    }


    myAnimation() {
        const obj = {
            n: 0
        }
        const comp = this.rLabelNode.getComponent(Label);
    
        tween(obj)
            .to(0.5, {n: 200}, {
                onUpdate: (target, ratio) => {
                    comp.string = String(obj.n);
                    // 在回调函数内部的 this 上下文会发生变化，因此需要采取措施来确保 this 引用的正确性。
                    // 在你的 onUpdate 回调内部，this 可能不会引用到你期望的对象。
                    this.wxy.setPosition(this.wxy.position.x, obj.n); // 使用 => 使用箭头函数将 this 绑定到你的函数内
                },
                easing: 'quadOut' // 缓动曲线为弹性曲线
            })
            .to(0.5, {n: 0}, {
                onUpdate: (target, ratio) => {
                    comp.string = String(obj.n);
                    this.wxy.setPosition(this.wxy.position.x, obj.n); 
                },
                easing: 'quadIn' // 缓动曲线为弹性曲线
            })
            .union()
            .repeat(1)
            .start();
    }
    
}

