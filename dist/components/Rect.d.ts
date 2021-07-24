import { FC } from "react";
import { BaseProps } from "./Canvas";
export interface RectProps extends BaseProps {
    x: number;
    y: number;
    width: number;
    height: number;
}
declare const Rect: FC<RectProps>;
export default Rect;
