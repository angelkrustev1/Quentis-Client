import { useState } from "react";
import theme from "../styles/CrimsonNauticaTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CustomThemeContext } from "../contexts/CustomThemeContext.";

export default function CustomThemeProvider({ children }) {
    const [customTheme, setCustomTheme] = useState(theme);

    const changeCustomThemeHandler = (newTheme) => setCustomTheme(newTheme);
    const resetDefaultTheme = () => setCustomTheme(theme);

    return (
        <CustomThemeContext.Provider value={{ customTheme, changeCustomThemeHandler, resetDefaultTheme }}>
            <ThemeProvider theme={customTheme}>
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    );
}
