import { useState } from "react";

export default function useRoomUpdate() {
    const [showEdit, setShowEdit] = useState(false);
    const editShowHandler = () => setShowEdit(true)
    const editCloseHanlder = () => setShowEdit(false)

    return {
        showEdit,
        editShowHandler,
        editCloseHanlder,
    }
}