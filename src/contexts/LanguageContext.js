import { createContext } from 'react'

export const LanguageContext = createContext({
    language: '',
    languageChangeHandler: () => null,
    languageResetDefaultHandler: () => null,
})