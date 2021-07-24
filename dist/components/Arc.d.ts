import { FC } from "react";
import { BaseProps } from "./Canvas";
export interface ArcProps extends BaseProps {
    x: number;
    y: number;
    radius: number;
    startAngle: number;
    endAngle: number;
    anticlockwise?: boolean;
}
declare const Arc: FC<ArcProps>;
export default Arc;
