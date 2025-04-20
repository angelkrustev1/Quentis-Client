import { createContext } from "react";

export const SettignsContext = createContext({
    settingsOpen: false,
    settingsOpenHandler: () => null,
    settingsCloseHandler: () => null,
})