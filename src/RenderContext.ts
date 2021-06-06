import {createContext} from "react";

import {IRenderManager} from "./RenderManager";

export const RenderContext = createContext<IRenderManager | null>(null);