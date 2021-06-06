import {MouseEvent} from "react";

export enum RenderObjectTypes {
    TEXT = "TEXT",
    ARC = "ARC",
    RECT = "RECT"
}

export interface IRenderObject {
    id: string;
    type: RenderObjectTypes,
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    onClick?: (e: MouseEvent, object: IRenderObject) => void;
}

export class RenderObject implements IRenderObject {
    id: string;
    type: RenderObjectTypes;
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    onClick?: (e: MouseEvent, object: IRenderObject) => void;

    constructor(
        id: string,
        type: RenderObjectTypes,
        draw: (ctx: CanvasRenderingContext2D) => void,
        path: Path2D,
        onClick?: (e: MouseEvent, object: IRenderObject) => void
    ) {
        this.id = id;
        this.type = type;
        this.draw = draw;
        this.path = path;
        this.onClick = onClick;
    }
}