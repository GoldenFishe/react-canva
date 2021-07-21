import {FC, useContext, useEffect, useRef} from "react";
import {nanoid} from "nanoid";

import {RenderContext} from "../RenderContext";
import {BaseProps} from "./Canvas";
import {RenderObject, RenderObjectTypes} from "../RenderObject";
import {getEventHandlersFromProps} from "../utils";

interface RectProps extends BaseProps {
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
    const ID = useRef(nanoid());
    const events = getEventHandlersFromProps<RectProps>(props);
    useEffect(() => {
        const path = new Path2D();
        const id = ID.current;
        const draw = (ctx: CanvasRenderingContext2D) => {
            path.rect(x, y, width, height);
            if (stroke) {
                ctx.strokeStyle = stroke;
                ctx.stroke(path);
            }
            if (fill) {
                ctx.fillStyle = fill;
                ctx.fill(path);
            }
        };
        renderManager?.addObject(new RenderObject(id, RenderObjectTypes.RECT, draw, path, events));
    }, [events, fill, height, renderManager, stroke, width, x, y]);
    return null;
};

export default Rect;