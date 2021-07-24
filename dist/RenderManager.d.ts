import { IRenderObject } from "./RenderObject";
import { EventName, Event } from "./Types";
export interface IRenderManager {
    addObject: (pipe: IRenderObject) => void;
    onEvent: (eventName: EventName) => (event: Event) => void;
}
export declare class RenderManager implements IRenderManager {
    private readonly ctx;
    private readonly objects;
    constructor(ctx: CanvasRenderingContext2D);
    addObject(object: IRenderObject): void;
    onEvent(eventName: EventName): (event: Event) => void;
    private draw;
    private resetStyle;
    private clear;
}
