import {FC, useContext, useEffect, useRef} from "react";
import {RenderContext} from "../RenderContext";
import {nanoid} from "nanoid";
import {RenderObject, RenderObjectTypes} from "../RenderObject";
import {BaseProps} from "./Canvas";
import {getEventHandlersFromProps} from "../utils";

interface LineProps extends BaseProps {
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
        const id = ID.current;
        const draw = (ctx: CanvasRenderingContext2D) => {
            path.moveTo(x1, y1);
            path.lineTo(x2, y2);
            ctx.stroke(path);
        };
        renderManager?.addObject(new RenderObject(id, RenderObjectTypes.LINE, draw, path, events));
    }, [events, renderManager, x1, x2, y1, y2]);
    return null;
};

export default Line;