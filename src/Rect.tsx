import {FC, useContext, useEffect} from 'react';
import {nanoid} from "nanoid";

import {CanvasContext} from "./Context";
import {IDrawPipeline} from "./DrawPipeline";

const ID = nanoid();

interface IProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

const Rect: FC<IProps> = ({x, y, width, height}) => {
    const drawPipeline = useContext(CanvasContext) as IDrawPipeline;
    useEffect(() => {
        console.log('rect');
        drawPipeline.addPipe({
            id: ID,
            pipe: (ctx) => {
                ctx.rect(x, y, width, height);
                ctx.fill();
            }
        });
    }, [x, y, width, height, drawPipeline]);
    return null;
};

export default Rect;