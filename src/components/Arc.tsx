import {FC, useContext, useEffect, useRef} from "react";
import {nanoid} from "nanoid";

import {BaseProps} from "./Canvas";
import {RenderContext} from "../RenderContext";
import {IRenderManager} from "../RenderManager";
import {RenderObject, RenderObjectTypes} from "../RenderObject";

interface ArcProps extends BaseProps {
    x: number;
    y: number;
    radius: number;
    startAngle: number;
    endAngle: number;
    anticlockwise?: boolean;
}

const Arc: FC<ArcProps> = ({
                               x,
                               y,
                               radius,
                               startAngle,
                               endAngle,
                               anticlockwise,
                               stroke,
                               fill,
                               onClick
                           }) => {
    const renderManager = useContext(RenderContext) as IRenderManager;
    const ID = useRef(nanoid());
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
        renderManager.addObject(new RenderObject(id, RenderObjectTypes.ARC, draw, path, onClick));
    }, [x, y, radius, startAngle, endAngle, anticlockwise, stroke, fill, onClick, renderManager]);
    return null;
};

export default Arc;