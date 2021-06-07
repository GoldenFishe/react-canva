import {FC, useContext, useEffect, useRef} from "react";
import {RenderContext} from "../RenderContext";
import {IRenderManager} from "../RenderManager";
import {nanoid} from "nanoid";
import {RenderObject, RenderObjectTypes} from "../RenderObject";
import {BaseProps} from "./Canvas";

interface LineProps extends BaseProps{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

const Line: FC<LineProps> = ({
                                 x1,
                                 y1,
                                 x2,
                                 y2,
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
            path.moveTo(x1, y1);
            path.lineTo(x2, y2);
            ctx.stroke(path);
        };
        renderManager.addObject(new RenderObject(id, RenderObjectTypes.LINE, draw, path, onClick));
    }, [x1, y1, x2, y2, stroke, fill, onClick, renderManager]);
    return null;
};

export default Line;