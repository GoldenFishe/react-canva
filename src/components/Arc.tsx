import {FC, useContext, useEffect, useId, useRef} from "react";

import {BaseProps} from "./Canvas";
import {RenderContext} from "../RenderContext";
import {RenderObject} from "../RenderObject";
import {drawAtCanvas, getEventHandlersFromProps} from "../utils";
import {RenderObjectTypes} from "../Types";

export interface ArcProps extends BaseProps {
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
    const ID = useId();
    const events = getEventHandlersFromProps<ArcProps>(props);
    useEffect(() => {
        const path = new Path2D();
        const params = {
            x,
            y,
            radius,
            startAngle,
            endAngle,
            anticlockwise,
            stroke,
            fill
        };
        const draw = (ctx: CanvasRenderingContext2D) => {
            path.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            drawAtCanvas(ctx, path, stroke, fill);
        };
        renderManager?.addObject(new RenderObject(ID, RenderObjectTypes.ARC, draw, path, events, params));
    }, [anticlockwise, endAngle, events, fill, radius, renderManager, startAngle, stroke, x, y]);
    return null;
};

export default Arc;