import { useState } from "react";
import { SettignsContext } from "../contexts/SettingsContext";

export default function SettingsProvider({
    children,
}) {
    const [settingsOpen, setSettingsOpen] = useState(false)
    const settingsOpenHandler = () => setSettingsOpen(true)
    const settingsCloseHandler = () => setSettingsOpen(false)

    return (
        <SettignsContext.Provider value={{ settingsOpen, settingsOpenHandler, settingsCloseHandler }}>
            {children}
        </SettignsContext.Provider>
    );
}