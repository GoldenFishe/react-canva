import { Events } from "./Types";
export declare enum RenderObjectTypes {
    TEXT = "TEXT",
    ARC = "ARC",
    RECT = "RECT",
    LINE = "LINE"
}
export interface IRenderObject {
    id: string;
    type: RenderObjectTypes;
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    events: Events;
}
export declare class RenderObject implements IRenderObject {
    id: string;
    type: RenderObjectTypes;
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    events: Events;
    constructor(id: string, type: RenderObjectTypes, draw: (ctx: CanvasRenderingContext2D) => void, path: Path2D, events: Events);
}
