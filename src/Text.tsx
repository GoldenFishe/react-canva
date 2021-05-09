import React, {useContext, useEffect} from 'react';
import {nanoid} from "nanoid";

import {CanvasContext} from "./Context";

const ID = nanoid();

const Text = () => {
    const drawPipeline = useContext(CanvasContext);
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
    }, []);
    return null;
};

export default Text;