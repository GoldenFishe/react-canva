import React, {useEffect, useMemo, useRef, useState, FC, ReactNode, MouseEvent} from "react";

import {RenderContext} from "../RenderContext";
import {RenderManager} from "../RenderManager";
import {IRenderObject} from "../RenderObject";

export interface BaseProps {
    x: number;
    y: number;
    stroke?: string;
    fill?: string;
    onClick?: (e: MouseEvent, object: IRenderObject) => void;
}

interface CanvasProps {
    children: ReactNode
}

// eslint-disable-next-line react/prop-types
const Canvas: FC<CanvasProps> = ({children}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
    const renderManager = useMemo(() => {
        if (ctx !== null) {
            return new RenderManager(ctx);
        }
        return null;
    }, [ctx]);
    useEffect(() => {
        if (canvasRef.current) {
            const currentCtx = canvasRef.current.getContext("2d");
            if (currentCtx) {
                const DEFAULT_DPR = 1;
                const dpr = window.devicePixelRatio || DEFAULT_DPR;
                const rect = canvasRef.current.getBoundingClientRect();
                canvasRef.current.width = Math.floor(rect.width * dpr);
                canvasRef.current.height = Math.floor(rect.height * dpr);
                currentCtx.scale(dpr, dpr);
                setCtx(currentCtx);
            }
        }
    }, []);

    return (
        <>
            <canvas ref={canvasRef}
                    style={{width: "100%", height: "100%"}}
                    onClick={renderManager?.onClick.bind(renderManager)}>
                Извините, ваш браузер нет поддерживает&lt;canvas&gt; элемент.
            </canvas>
            {ctx ? <RenderContext.Provider value={renderManager}>{children}</RenderContext.Provider> : null}
        </>
    );
};

export default Canvas;