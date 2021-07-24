import { FC } from "react";
import { BaseProps } from "./Canvas";
export interface TextProps extends BaseProps {
    x: number;
    y: number;
    text: string;
    font: string;
}
declare const Text: FC<TextProps>;
export default Text;
