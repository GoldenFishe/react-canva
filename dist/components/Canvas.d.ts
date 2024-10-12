import { ReactNode } from "react";
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
declare const Canvas: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default Canvas;
