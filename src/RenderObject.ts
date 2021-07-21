import {Events} from "./Types";

export enum RenderObjectTypes {
    TEXT = "TEXT",
    ARC = "ARC",
    RECT = "RECT",
    LINE = "LINE"
}

export interface IRenderObject {
    id: string;
    type: RenderObjectTypes,
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    events: Events;
}

export class RenderObject implements IRenderObject {
    id: string;
    type: RenderObjectTypes;
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    events: Events;

    constructor(
        id: string,
        type: RenderObjectTypes,
        draw: (ctx: CanvasRenderingContext2D) => void,
        path: Path2D,
        events: Events
    ) {
        this.id = id;
        this.type = type;
        this.draw = draw;
        this.path = path;
        this.events = events;
    }
}