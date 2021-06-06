import React, {useEffect, useMemo, useRef, useState, FC, ReactNode} from 'react';

import {CanvasContext} from "./Context";
import {DrawPipeline, IDrawPipeline} from "./DrawPipeline";

interface IProps {
    children: ReactNode
}

const Canvas: FC<IProps> = ({children}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
    const drawPipeline: IDrawPipeline | null = useMemo(() => {
        if (ctx !== null) return new DrawPipeline(ctx);
        return null;
    }, [ctx]);
    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                const dpr = window.devicePixelRatio || 1;
                const rect = canvasRef.current.getBoundingClientRect();
                canvasRef.current.width = Math.floor(rect.width * dpr);
                canvasRef.current.height = Math.floor(rect.height * dpr);
                ctx.scale(dpr, dpr);
                setCtx(ctx);
            }
        }
    }, []);

    console.log(drawPipeline?.pipes);
    console.log('canvas');

    return (
        <>
            <canvas ref={canvasRef} style={{
                width: '100%',
                height: '100%'
            }}>
                Извините, ваш браузер нет поддерживает&lt;canvas&gt; элемент.
            </canvas>
            {ctx ? (
                <CanvasContext.Provider value={drawPipeline}>
                    {children}
                </CanvasContext.Provider>
            ) : null}
        </>
    )
}

export default Canvas;