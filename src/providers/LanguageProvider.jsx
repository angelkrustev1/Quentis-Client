import { useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function LanguageProvider({
    children,
}) {
    const [language, setLanguage] = useState('en')
    const languageChangeHandler = (newLanguage) => setLanguage(newLanguage)
    const languageResetDefaultHandler = () => setLanguage('en')

    return (
        <LanguageContext.Provider value={{ language, languageChangeHandler, languageResetDefaultHandler }}>
            {children}
        </LanguageContext.Provider>
    );
}