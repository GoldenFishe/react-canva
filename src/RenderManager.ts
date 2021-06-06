import {MouseEvent} from "react";

import {IRenderObject} from "./RenderObject";

export interface IRenderManager {
    ctx: CanvasRenderingContext2D | null;
    objects: Array<IRenderObject>;
    addObject: (pipe: IRenderObject) => void;
    draw: () => void;
    onClick: (e: MouseEvent) => void;
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
            object.draw(this.ctx);
        }
    }

    onClick(event: MouseEvent): void {
        const {offsetX, offsetY} = event.nativeEvent;
        for (let i = 0; i < this.objects.length; i++) {
            const object = this.objects[i];
            if (object.path && object.onClick) {
                const pointInPath = this.ctx.isPointInPath(object.path, offsetX, offsetY);
                if (pointInPath) {
                    object.onClick(event, object);
                }
            }
        }
    }

    private clear() {
        const X_START = 0;
        const Y_START = 0;
        this.ctx.clearRect(X_START, Y_START, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}
