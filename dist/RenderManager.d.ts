import { MouseEvent } from "react";
import { IRenderObject } from "./RenderObject";
export interface IRenderManager {
    ctx: CanvasRenderingContext2D | null;
    objects: Array<IRenderObject>;
    addObject: (pipe: IRenderObject) => void;
    draw: () => void;
    onClick: (e: MouseEvent) => void;
}
export declare class RenderManager implements IRenderManager {
    ctx: CanvasRenderingContext2D;
    objects: Array<IRenderObject>;
    constructor(ctx: CanvasRenderingContext2D);
    addObject(object: IRenderObject): void;
    draw(): void;
    onClick(event: MouseEvent): void;
    resetStyle(): void;
    private clear;
}
