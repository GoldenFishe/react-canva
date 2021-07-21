import { FC } from "react";
import { Events } from "../Types";
export interface BaseProps extends Events {
    stroke?: string;
    fill?: string;
    lineCap?: CanvasLineCap;
    lineDashOffset?: number;
    lineJoin?: CanvasLineJoin;
    lineWidth?: number;
    miterLimit?: number;
}
declare const Canvas: FC;
export default Canvas;
