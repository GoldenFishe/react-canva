import {Events, Params, RenderObjectTypes} from "./Types";

export interface IRenderObject {
    id: string;
    type: RenderObjectTypes,
    draw: (ctx: CanvasRenderingContext2D) => void;
    path: Path2D;
    events: Events;
    params: Params;
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