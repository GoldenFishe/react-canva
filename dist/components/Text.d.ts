import { FC } from "react";
import { BaseProps } from "./Canvas";
interface TextProps extends BaseProps {
    x: number;
    y: number;
    text: string;
    font: string;
}
declare const Text: FC<TextProps>;
export default Text;
