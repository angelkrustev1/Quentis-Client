import { createContext } from "react";

export const RoomCreateContext = createContext({
    roomCreateOpen: false,
    roomCreateOpenHandler: () => null,
    roomCreateCloseHandler: () => null,
})