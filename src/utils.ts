import {Events} from "./Types";

export function getEventHandlersFromProps<T>(props: T): Events {
    const events: Events = {};
    const eventPrefix = "on";
    for (const propName in props) {
        if (propName.slice(0, 2) === eventPrefix) {
            // @ts-ignore
            events[propName] = props[propName];
        }
    }
    return events;
}

export function drawAtCanvas(ctx: CanvasRenderingContext2D, path: Path2D, stroke?: string, fill?: string): void {
    if (fill) {
        ctx.fillStyle = fill;
        ctx.fill(path);
    }
    if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.stroke(path);
    }
}