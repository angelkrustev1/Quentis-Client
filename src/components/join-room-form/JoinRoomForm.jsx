import {
    Box,
    Typography,
    TextField,
    IconButton,
    InputAdornment,
    useMediaQuery,
} from "@mui/material";
import TagIcon from '@mui/icons-material/Tag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import useTranslateText from "../../hooks/useTranslationText";

export default function JoinRoomForm() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const translation = useTranslateText();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: "center",
                px: 1.75,
                py: 1.5,
                mt: 4,
                bgcolor: theme.palette.secondary.main, 
                borderRadius: isMobile ? "8px" : "1400px",
                boxShadow: 3,
                maxWidth: isMobile ? 400 : 600,
                mx: "auto",
                width: "100%",
            }}
        >
            <Typography
                variant="subtitle1"
                sx={{
                    color: "#ffffff", 
                    textAlign: isMobile ? "center" : "left",
                    fontWeight: 'bold',
                    flexShrink: 0,
                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                }}
            >
                {translation.joinRoomFormText}
            </Typography>

            <Box
                component="form"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "999px",
                    bgcolor: theme.palette.background.default,
                    boxShadow: 2,
                    flexGrow: 1,
                    maxWidth: 300,
                    width: "100%",
                    justifyContent: "space-between",
                    ml: isMobile ? 0 : 2,
                    mt: isMobile ? 2 : 0,
                }}
            >
                <TextField
                    fullWidth
                    placeholder={translation.joinRoomFormPlaceholder}
                    size="small"
                    variant="outlined"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "999px",
                            pl: 1,
                            bgcolor: theme.palette.background.default,
                            color: '#78000',
                            "& fieldset": {
                                borderColor: theme.palette.primary.main,
                            },
                            "&:hover fieldset": {
                                borderColor: theme.palette.primary.main,
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: theme.palette.primary.main,
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <TagIcon sx={{ color: theme.palette.text.primary }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton type="submit" sx={{ color: theme.palette.text.primary }}>
                                    <ArrowForwardIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Box>
    );
}
