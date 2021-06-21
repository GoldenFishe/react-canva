import { FC, MouseEvent } from "react";
import { IRenderObject } from "../RenderObject";
export interface BaseProps {
    stroke?: string;
    fill?: string;
    lineCap?: CanvasLineCap;
    lineDashOffset?: number;
    lineJoin?: CanvasLineJoin;
    lineWidth?: number;
    miterLimit?: number;
    onClick?: (e: MouseEvent, object: IRenderObject) => void;
}
declare const Canvas: FC;
export default Canvas;
