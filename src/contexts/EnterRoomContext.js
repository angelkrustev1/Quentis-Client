import { createContext } from "react";

export const EnterRoomContext = createContext({
    enterRoomOpen: false,
    enterRoomOpenHandler: () => null,
    enterRoomCloseHandler: () => null,
})