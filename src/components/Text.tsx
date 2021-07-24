import {FC, useContext, useEffect, useRef} from "react";
import {nanoid} from "nanoid";

import {RenderContext} from "../RenderContext";
import {BaseProps} from "./Canvas";
import {RenderObject, RenderObjectTypes} from "../RenderObject";
import {getEventHandlersFromProps} from "../utils";

export interface TextProps extends BaseProps {
    x: number;
    y: number;
    text: string;
    font: string;
}

const Text: FC<TextProps> = (props) => {
    const {
        x,
        y,
        text,
        font,
        stroke,
        fill
    } = props;
    const renderManager = useContext(RenderContext);
    const ID = useRef(nanoid());
    const events = getEventHandlersFromProps<TextProps>(props);
    useEffect(() => {
        const path = new Path2D();
        const params = {
            x,
            y,
            text,
            font,
            stroke,
            fill
        };
        const draw = (ctx: CanvasRenderingContext2D) => {
            ctx.font = font;
            const {
                width,
                actualBoundingBoxAscent
            } = ctx.measureText(text);
            path.rect(x, y - actualBoundingBoxAscent, width, actualBoundingBoxAscent);
            if (fill) {
                ctx.fillStyle = fill;
                ctx.fillText(text, x, y);
            }
            if (stroke) {
                ctx.strokeStyle = stroke;
                ctx.strokeText(text, x, y);
            }
        };
        renderManager?.addObject(new RenderObject(ID.current, RenderObjectTypes.TEXT, draw, path, events, params));
    }, [events, fill, font, renderManager, stroke, text, x, y]);
    return null;
};

export default Text;