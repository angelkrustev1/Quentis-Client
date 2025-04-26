import {
    Box,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import useTranslateText from "../../../hooks/useTranslationText";

export default function NoRooms() {
    const theme = useTheme();
    const translateion = useTranslateText();

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mx: "auto",
                color: theme.palette.text.secondary,
            }}
        >
            <MeetingRoomOutlinedIcon
                color="primary"
                sx={{ fontSize: 64, mb: 2 }}
            />
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 500,
                    fontSize: { xs: 18, sm: 20 },
                    maxWidth: 400,
                }}
            >
                {translateion.noRooms}
            </Typography>
        </Box>
    );
}

