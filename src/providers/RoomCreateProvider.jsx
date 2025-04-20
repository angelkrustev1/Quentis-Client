import { useState } from "react";
import { RoomCreateContext } from "../contexts/RoomCreateContext";

export default function RoomCreateProvider({
    children,
}) {
    const [roomCreateOpen, setRoomCreateOpen] = useState(false)
    const roomCreateOpenHandler = () => setRoomCreateOpen(true)
    const roomCreateCloseHandler = () => setRoomCreateOpen(false)

    return (
        <RoomCreateContext.Provider value={{roomCreateOpen, roomCreateOpenHandler, roomCreateCloseHandler}}>
            {children}
        </RoomCreateContext.Provider>
    );
}