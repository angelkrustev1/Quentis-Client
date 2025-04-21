import { TextField, alpha, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from '@mui/material/styles';
import useTranslateText from "../../hooks/useTranslationText";

export default function Search() {
    const theme = useTheme();
    const translation = useTranslateText();

    return (
        <Paper
            elevation={6}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                maxWidth: { xs: "100%", sm: 340 },
                bgcolor: alpha(theme.palette.primary.main, 0.4),
                borderRadius: 1,
                px: 1,
            }}
            component="form"
        >
            <IconButton>
                <SearchIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
            <TextField
                placeholder={translation.searchPlaceholder}
                fullWidth
                size="small"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            border: "none",
                        },
                        backgroundColor: "transparent",
                    },
                    "& .MuiInputBase-input::placeholder": {
                        color: theme.palette.text.primary,
                    },
                }}
            />
        </Paper>
    );
}
