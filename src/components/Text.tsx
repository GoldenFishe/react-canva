import {FC, useContext, useEffect, useRef} from "react";
import {nanoid} from "nanoid";

import {RenderContext} from "../RenderContext";
import {IRenderManager} from "../RenderManager";
import {BaseProps} from "./Canvas";
import {RenderObject, RenderObjectTypes} from "../RenderObject";

interface TextProps extends BaseProps {
    text: string;
}

const Text: FC<TextProps> = ({
                                 x,
                                 y,
                                 text,
                                 stroke,
                                 fill,
                                 onClick
                             }) => {
    const renderManager = useContext(RenderContext) as IRenderManager;
    const ID = useRef(nanoid());
    useEffect(() => {
        console.log("text");
        const path = new Path2D();
        const id = ID.current;
        const draw = (ctx: CanvasRenderingContext2D) => {
            ctx.font = "48px serif";
            const {width, actualBoundingBoxAscent} = ctx.measureText(text);
            path.rect(x, y - actualBoundingBoxAscent, width, actualBoundingBoxAscent);
            ctx.strokeStyle = "rgba(0, 0, 0, 0)";
            ctx.stroke(path);
            if (stroke) {
                ctx.strokeText(text, x, y);
            }
            if (fill) {
                ctx.fillText(text, x, y);
            }
        };
        renderManager.addObject(new RenderObject(id, RenderObjectTypes.TEXT, draw, path, onClick));
    }, [stroke, fill, renderManager, onClick, x, y, text]);
    return null;
};

export default Text;