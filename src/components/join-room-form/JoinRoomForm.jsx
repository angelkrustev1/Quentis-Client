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
import { useTheme } from "@emotion/react";

export default function JoinRoomForm() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();

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
                Joining as a participant?
            </Typography>

            <Box
                component="form"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "999px",
                    bgcolor: '#FDF0D5', // Light cream background for input
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
                    placeholder="Enter Code Here"
                    size="small"
                    variant="outlined"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "999px",
                            pl: 1,
                            bgcolor: '#FDF0D5',
                            color: '#78000',
                            "& fieldset": {
                                borderColor: '#78000',
                            },
                            "&:hover fieldset": {
                                borderColor: '#78000', // crimson on hover
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: '#78000', // crimson when focused
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <TagIcon sx={{ color: '#003049' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton type="submit" sx={{ color: '#003049' }}>
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
