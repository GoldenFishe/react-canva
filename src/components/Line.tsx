import {FC, useContext, useEffect, useRef} from "react";
import {nanoid} from "nanoid";

import {RenderContext} from "../RenderContext";
import {RenderObject} from "../RenderObject";
import {BaseProps} from "./Canvas";
import {getEventHandlersFromProps} from "../utils";
import {RenderObjectTypes} from "../Types";

export interface LineProps extends BaseProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

const Line: FC<LineProps> = (props) => {
    const {
        x1,
        y1,
        x2,
        y2,
        stroke,
        fill
    } = props;
    const renderManager = useContext(RenderContext);
    const ID = useRef(nanoid());
    const events = getEventHandlersFromProps<LineProps>(props);
    useEffect(() => {
        const path = new Path2D();
        const params = {
            x1,
            y1,
            x2,
            y2,
            stroke,
            fill
        };
        const draw = (ctx: CanvasRenderingContext2D) => {
            path.moveTo(x1, y1);
            path.lineTo(x2, y2);
            ctx.stroke(path);
        };
        renderManager?.addObject(new RenderObject(ID.current, RenderObjectTypes.LINE, draw, path, events, params));
    }, [events, fill, renderManager, stroke, x1, x2, y1, y2]);
    return null;
};

export default Line;