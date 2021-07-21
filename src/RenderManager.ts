import {IRenderObject} from "./RenderObject";
import {EventName, Event} from "./Types";

export interface IRenderManager {
    ctx: CanvasRenderingContext2D | null;
    objects: Array<IRenderObject>;
    addObject: (pipe: IRenderObject) => void;
    draw: () => void;
    onEvent: (eventName: EventName) => (event: Event) => void;
}

export class RenderManager implements IRenderManager {
    ctx: CanvasRenderingContext2D;
    objects: Array<IRenderObject>;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.objects = [];
    }

    addObject(object: IRenderObject): void {
        const NON_EXIST_INDEX = -1;
        const index = this.objects.findIndex(({id}) => id === object.id);
        if (index === NON_EXIST_INDEX) {
            this.objects.push(object);
        } else {
            this.objects[index] = object;
        }
        this.draw();
    }

    draw(): void {
        this.clear();
        for (let i = 0; i < this.objects.length; i++) {
            const object = this.objects[i];
            this.resetStyle();
            object.draw(this.ctx);
        }
    }

    onEvent(eventName: EventName): (event: Event) => void {
        const self = this;
        return function eventHandler (event: Event) {
            const {
                offsetX,
                offsetY
            } = event.nativeEvent;
            for (let i = 0; i < self.objects.length; i++) {
                const object = self.objects[i];
                const eventHandler = object.events[eventName];
                if (object.path && eventHandler) {
                    const pointInPath = self.ctx.isPointInPath(object.path, offsetX, offsetY);
                    const pointInStroke = self.ctx.isPointInStroke(object.path, offsetX, offsetY);
                    if (pointInPath || pointInStroke) {
                        eventHandler({
                            id: object.id,
                            type: object.type,
                            eventType: eventName,
                            event
                        });
                    }
                }
            }
        };
    }

    resetStyle(): void {
        this.ctx.strokeStyle = "#000";
        this.ctx.fillStyle = "#000";
        this.ctx.lineCap = "butt";
        this.ctx.lineDashOffset = 0.0;
        this.ctx.lineJoin = "miter";
        this.ctx.lineWidth = 1.0;
        this.ctx.miterLimit = 10.0;
    }

    private clear() {
        const X_START = 0;
        const Y_START = 0;
        this.ctx.clearRect(X_START, Y_START, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}