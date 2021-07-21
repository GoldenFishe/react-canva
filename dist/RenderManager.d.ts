import { IRenderObject } from "./RenderObject";
import { EventName, Event } from "./Types";
export interface IRenderManager {
    ctx: CanvasRenderingContext2D | null;
    objects: Array<IRenderObject>;
    addObject: (pipe: IRenderObject) => void;
    draw: () => void;
    onEvent: (eventName: EventName) => (event: Event) => void;
}
export declare class RenderManager implements IRenderManager {
    ctx: CanvasRenderingContext2D;
    objects: Array<IRenderObject>;
    constructor(ctx: CanvasRenderingContext2D);
    addObject(object: IRenderObject): void;
    draw(): void;
    onEvent(eventName: EventName): (event: Event) => void;
    resetStyle(): void;
    private clear;
}
