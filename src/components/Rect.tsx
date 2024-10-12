import {FC, useContext, useEffect, useId} from "react";

import {RenderContext} from "../RenderContext";
import {BaseProps} from "./Canvas";
import {RenderObject} from "../RenderObject";
import {drawAtCanvas, getEventHandlersFromProps} from "../utils";
import {RenderObjectTypes} from "../Types";

export interface RectProps extends BaseProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

const Rect: FC<RectProps> = (props) => {
    const {
        x,
        y,
        width,
        height,
        stroke,
        fill
    } = props;
    const renderManager = useContext(RenderContext);
    const ID = useId();
    const events = getEventHandlersFromProps<RectProps>(props);
    useEffect(() => {
        const path = new Path2D();
        const params = {
            x,
            y,
            width,
            height,
            stroke,
            fill
        };
        const draw = (ctx: CanvasRenderingContext2D) => {
            path.rect(x, y, width, height);
            drawAtCanvas(ctx, path, stroke, fill);
        };
        const renderObject = new RenderObject(ID, RenderObjectTypes.RECT, draw, path, events, params);
        renderManager?.addObject(renderObject);
    }, [events, fill, height, renderManager, stroke, width, x, y]);
    return null;
};

export default Rect;