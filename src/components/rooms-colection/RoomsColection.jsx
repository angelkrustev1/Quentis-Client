import { Box } from "@mui/material";
import RoomCard from "../room-card/RoomCard";

export default function RoomList() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 2,
                padding: 2,
            }}
        >
            {Array.from({ length: 10 }).map((_, index) => (
                <RoomCard key={index} />
            ))}
        </Box>
    );
}
