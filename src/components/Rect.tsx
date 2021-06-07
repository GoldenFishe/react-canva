import {FC, useContext, useEffect, useRef} from "react";
import {nanoid} from "nanoid";

import {RenderContext} from "../RenderContext";
import {IRenderManager} from "../RenderManager";
import {BaseProps} from "./Canvas";
import {RenderObject, RenderObjectTypes} from "../RenderObject";

interface RectProps extends BaseProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

const Rect: FC<RectProps> = ({
                                 x,
                                 y,
                                 width,
                                 height,
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
        renderManager.addObject(new RenderObject(id, RenderObjectTypes.RECT, draw, path, onClick));
    }, [x, y, width, height, fill, stroke, renderManager, onClick]);
    return null;
};

export default Rect;