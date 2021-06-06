import {createContext} from "react";

import {IDrawPipeline} from "./DrawPipeline";

export const CanvasContext = createContext<IDrawPipeline | null>(null);