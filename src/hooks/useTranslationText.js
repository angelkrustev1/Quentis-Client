import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations/Translations";

export default function useTranslateText() {
    const { language } = useContext(LanguageContext)
    const translation = translations[language]

    return translation;
}