import {Events, Params} from "./Types";

export interface IRenderObject {
    id: string;
    type: RenderObjectTypes,
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    events: Events;
    params: Params;
}

// eslint-disable-next-line no-shadow
export enum RenderObjectTypes {
    TEXT = "TEXT",
    ARC = "ARC",
    RECT = "RECT",
    LINE = "LINE"
}

export class RenderObject implements IRenderObject {
    id: string;
    type: RenderObjectTypes;
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    events: Events;
    params: Params;

    constructor(
        id: string,
        type: RenderObjectTypes,
        draw: (ctx: CanvasRenderingContext2D) => void,
        path: Path2D,
        events: Events,
        params: Params
    ) {
        this.id = id;
        this.type = type;
        this.draw = draw;
        this.path = path;
        this.events = events;
        this.params = params;
    }
}