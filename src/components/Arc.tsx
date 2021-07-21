import {FC, useContext, useEffect, useRef} from "react";
import {nanoid} from "nanoid";

import {BaseProps} from "./Canvas";
import {RenderContext} from "../RenderContext";
import {RenderObject, RenderObjectTypes} from "../RenderObject";
import {getEventHandlersFromProps} from "../utils";

interface ArcProps extends BaseProps {
    x: number;
    y: number;
    radius: number;
    startAngle: number;
    endAngle: number;
    anticlockwise?: boolean;
}

const Arc: FC<ArcProps> = (props) => {
    const {
        x,
        y,
        radius,
        startAngle,
        endAngle,
        anticlockwise,
        stroke,
        fill
    } = props;
    const renderManager = useContext(RenderContext);
    const ID = useRef(nanoid());
    const events = getEventHandlersFromProps<ArcProps>(props);
    useEffect(() => {
        const path = new Path2D();
        const id = ID.current;
        const draw = (ctx: CanvasRenderingContext2D) => {
            path.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            if (stroke) {
                ctx.strokeStyle = stroke;
                ctx.stroke(path);
            }
            if (fill) {
                ctx.fillStyle = fill;
                ctx.fill(path);
            }
        };
        renderManager?.addObject(new RenderObject(id, RenderObjectTypes.ARC, draw, path, events));
    }, [anticlockwise, endAngle, events, fill, radius, renderManager, startAngle, stroke, x, y]);
    return null;
};

export default Arc;