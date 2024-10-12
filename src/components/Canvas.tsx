import {ReactNode, useEffect, useMemo, useRef, useState} from "react";

import {RenderContext} from "../RenderContext";
import {RenderManager} from "../RenderManager";
import {Events} from "../Types";

export interface BaseProps extends Events {
    stroke?: string;
    fill?: string;
    lineCap?: CanvasLineCap;
    lineDashOffset?: number;
    lineJoin?: CanvasLineJoin;
    lineWidth?: number;
    miterLimit?: number;
}

const Canvas = ({children}: { children: ReactNode }) => {
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
                const rect = canvasRef.current.getBoundingClientRect();
                canvasRef.current.width = rect.width;
                canvasRef.current.height = rect.height;
                setCtx(currentCtx);
            }
        }
    }, []);
    return (
        <>
            <canvas ref={canvasRef}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    // onAuxClick={renderManager?.onEvent("onAuxClick")}
                    // onAuxClickCapture={renderManager?.onEvent("onAuxClickCapture")}
                    onClick={renderManager?.onEvent("onClick")}
                    // onClickCapture={renderManager?.onEvent("onClickCapture")}
                    onContextMenu={renderManager?.onEvent("onContextMenu")}
                    // onContextMenuCapture={renderManager?.onEvent("onContextMenuCapture")}
                    onDoubleClick={renderManager?.onEvent("onDoubleClick")}
                    // onDoubleClickCapture={renderManager?.onEvent("onDoubleClickCapture")}
                    onMouseDown={renderManager?.onEvent("onMouseDown")}
                    // onMouseDownCapture={renderManager?.onEvent("onMouseDownCapture")}
                    // onMouseEnter={renderManager?.onEvent("onMouseEnter")}
                    // onMouseLeave={renderManager?.onEvent("onMouseLeave")}
                    // onMouseMove={renderManager?.onEvent("onMouseMove")}
                    // onMouseMoveCapture={renderManager?.onEvent("onMouseMoveCapture")}
                    // onMouseOut={renderManager?.onEvent("onMouseOut")}
                    // onMouseOutCapture={renderManager?.onEvent("onMouseOutCapture")}
                    // onMouseOver={renderManager?.onEvent("onMouseOver")}
                    // onMouseOverCapture={renderManager?.onEvent("onMouseOverCapture")}
                    onMouseUp={renderManager?.onEvent("onMouseUp")}
                    // onMouseUpCapture={renderManager?.onEvent("onMouseUpCapture")}
                    onPointerDown={renderManager?.onEvent("onPointerDown")}
                    // onPointerDownCapture={renderManager?.onEvent("onPointerDownCapture")}
                    // onPointerMove={renderManager?.onEvent("onPointerMove")}
                    // onPointerMoveCapture={renderManager?.onEvent("onPointerMoveCapture")}
                    // onPointerUp={renderManager?.onEvent("onPointerUp")}
                    // onPointerUpCapture={renderManager?.onEvent("onPointerUpCapture")}
                    // onPointerCancel={renderManager?.onEvent("onPointerCancel")}
                    // onPointerCancelCapture={renderManager?.onEvent("onPointerCancelCapture")}
                    // onPointerEnter={renderManager?.onEvent("onPointerEnter")}
                    // onPointerEnterCapture={renderManager?.onEvent("onPointerEnterCapture")}
                    // onPointerLeave={renderManager?.onEvent("onPointerLeave")}
                    // onPointerLeaveCapture={renderManager?.onEvent("onPointerLeaveCapture")}
                    // onPointerOver={renderManager?.onEvent("onPointerOver")}
                    // onPointerOverCapture={renderManager?.onEvent("onPointerOverCapture")}
                    // onPointerOut={renderManager?.onEvent("onPointerOut")}
                    // onPointerOutCapture={renderManager?.onEvent("onPointerOutCapture")}
                    // onGotPointerCapture={renderManager?.onEvent("onGotPointerCapture")}
                    // onGotPointerCaptureCapture={renderManager?.onEvent("onGotPointerCaptureCapture")}
                    // onLostPointerCapture={renderManager?.onEvent("onLostPointerCapture")}
                    // onLostPointerCaptureCapture={renderManager?.onEvent("onLostPointerCaptureCapture")}
            >
                Извините, ваш браузер нет поддерживает&lt;canvas&gt; элемент.
            </canvas>
            {ctx ? <RenderContext.Provider value={renderManager}>{children}</RenderContext.Provider> : null}
        </>
    );
};

export default Canvas;