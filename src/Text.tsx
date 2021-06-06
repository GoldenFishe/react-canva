import {useContext, useEffect} from 'react';
import {nanoid} from "nanoid";

import {CanvasContext} from "./Context";
import {IDrawPipeline} from "./DrawPipeline";

const ID = nanoid();

const Text = () => {
    const drawPipeline = useContext(CanvasContext) as IDrawPipeline;
    useEffect(() => {
        console.log('text');
        drawPipeline.addPipe({
            id: ID,
            pipe: (ctx) => {
                ctx.font = "48px serif";
                ctx.strokeStyle = 'red'
                ctx.strokeText("Hello world", 50, 100);
            }
        });
    }, [drawPipeline]);
    return null;
};

export default Text;