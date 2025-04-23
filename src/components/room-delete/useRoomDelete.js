import { useState } from "react";

export default function useRoomDelete() {
    const [showDelete, setShowDelete] = useState(false);
    const deleteShowHandler = () => setShowDelete(true)
    const deleteCloseHandler = () => setShowDelete(false)

    return {
        showDelete,
        deleteShowHandler,
        deleteCloseHandler,
    }

}