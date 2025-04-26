import { Box, Typography } from "@mui/material";
import JoinRoomForm from "../join-room-form/JoinRoomForm";
import { useTheme } from '@mui/material/styles';
import useTranslateText from "../../hooks/useTranslationText";

export default function Home() {
    const theme = useTheme();
    const translation = useTranslateText();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: '2rem',
            }}
        >
            <JoinRoomForm />

            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    display: "inline-block",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
            >
                {translation.homeTitlePartOne}<br />
                {translation.homeTitlePartTwo}
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    fontSize: { xs: "0.85rem", sm: "1rem", md: "1.35rem" },
                    fontWeight: 400,
                    color: theme.palette.primary.main,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    display: "inline-block",
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                    mb: 4,
                }}
            >
                {translation.homeSubTitlePartOne}<br />
                {translation.homeSubTitlePartTwo}
            </Typography>
        </Box>
    );
}
