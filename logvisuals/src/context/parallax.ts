import { createContext } from "react";
import { ReactSetState } from "../types/Utils";

export const ParallaxContext = createContext<ReactSetState<boolean> | null>(null);