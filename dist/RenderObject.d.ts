import { MouseEvent } from "react";
export interface IRenderObject {
    id: string;
    type: RenderObjectTypes;
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    onClick?: (e: MouseEvent, object: IRenderObject) => void;
}
export declare enum RenderObjectTypes {
    TEXT = "TEXT",
    ARC = "ARC",
    RECT = "RECT",
    LINE = "LINE"
}
export declare class RenderObject implements IRenderObject {
    id: string;
    type: RenderObjectTypes;
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    onClick?: (e: MouseEvent, object: IRenderObject) => void;
    constructor(id: string, type: RenderObjectTypes, draw: (ctx: CanvasRenderingContext2D) => void, path: Path2D, onClick?: (e: MouseEvent, object: IRenderObject) => void);
}
