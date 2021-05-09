import React, {useEffect, useMemo, useRef, useState, FC, ReactChildren} from 'react';

import {CanvasContext} from "./Context";
import {DrawPipeline, IDrawPipeline} from "./DrawPipeline";

interface IProps {
    children: ReactChildren
}

const Canvas: FC<IProps> = ({children}) => {
    const canvasRef = useRef<HTMLCanvasElement>();
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null);
    const drawPipeline: IDrawPipeline = useMemo(() => new DrawPipeline(ctx), [ctx]);
    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const rect = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = Math.floor(rect.width * dpr);
        canvasRef.current.height = Math.floor(rect.height * dpr);
        ctx.scale(dpr, dpr);
        setCtx(ctx);
    }, []);

    console.log(drawPipeline.pipes);
    console.log('canvas');

    return (
        <CanvasContext.Provider value={drawPipeline}>
            <canvas ref={canvasRef} style={{
                width: '100%',
                height: '100%'
            }}>
                Извините, ваш браузер нет поддерживает&lt;canvas&gt; элемент.
            </canvas>
            {ctx && children}
        </CanvasContext.Provider>
    )
}

export default Canvas;