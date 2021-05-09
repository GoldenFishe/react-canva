import {Context, createContext} from "react";

import {IDrawPipeline} from "./DrawPipeline";

export const CanvasContext: Context<IDrawPipeline> = createContext(null);