import { useState } from "react";
import { EnterRoomContext } from "../contexts/EnterRoomContext";

export default function EnterRoomProvider({
    children,
}) {
    const [enterRoomOpen, setEnterRoomOpen] = useState(false)
    const enterRoomOpenHandler = () => setEnterRoomOpen(true)
    const enterRoomCloseHandler = () => setEnterRoomOpen(false)

    return (
        <EnterRoomContext.Provider value={{ enterRoomOpen, enterRoomOpenHandler, enterRoomCloseHandler }}>
            {children}
        </EnterRoomContext.Provider>
    )
}