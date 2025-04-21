import { Box, Typography } from "@mui/material";
import Search from "../search/Search";
import RoomsColection from "../rooms-colection/RoomsColection";
import useTranslateText from "../../hooks/useTranslationText";

export default function RoomsPage() {
    const translation = useTranslateText();

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    gap: { xs: 2, sm: 3, md: 4 },
                    py: 4,
                    mb: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.15rem" },
                        fontWeight: 600,
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                    }}
                >
                    {translation.roomsPageText}
                </Typography>

                <Box
                    sx={{
                        flexGrow: 1,
                        width: { xs: "100%", sm: "auto" },
                        maxWidth: { sm: 500 },
                        display: "flex",
                    }}
                >
                    <Search />
                </Box>
            </Box>


            <RoomsColection />
        </>
    )
}