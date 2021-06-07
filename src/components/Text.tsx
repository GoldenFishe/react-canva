import {FC, useContext, useEffect, useRef} from "react";
import {nanoid} from "nanoid";

import {RenderContext} from "../RenderContext";
import {IRenderManager} from "../RenderManager";
import {BaseProps} from "./Canvas";
import {RenderObject, RenderObjectTypes} from "../RenderObject";

interface TextProps extends BaseProps {
    x: number;
    y: number;
    text: string;
    font: string;
}

const Text: FC<TextProps> = ({
                                 x,
                                 y,
                                 text,
                                 font,
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
            ctx.font = font;
            const {width, actualBoundingBoxAscent} = ctx.measureText(text);
            path.rect(x, y - actualBoundingBoxAscent, width, actualBoundingBoxAscent);
            if (stroke) {
                ctx.strokeStyle = stroke;
                ctx.strokeText(text, x, y);
            }
            if (fill) {
                ctx.fillStyle = fill;
                ctx.fillText(text, x, y);
            }
        };
        renderManager.addObject(new RenderObject(id, RenderObjectTypes.TEXT, draw, path, onClick));
    }, [font, text, stroke, fill, renderManager, onClick, x, y]);
    return null;
};

export default Text;