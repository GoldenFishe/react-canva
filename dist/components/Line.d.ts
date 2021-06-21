import { FC } from "react";
import { BaseProps } from "./Canvas";
interface LineProps extends BaseProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
declare const Line: FC<LineProps>;
export default Line;
