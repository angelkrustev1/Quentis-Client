import { Box } from "@mui/material";
import RoomCard from "../room-card/RoomCard";
import NoRooms from "../profile/no-rooms/NoRooms";

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
                mb: 4,
            }}
        >   
            {
                false
                ? Array.from({ length: 1 }).map((_, index) => (
                    <RoomCard key={index} />
                ))
                : <NoRooms />
            }
            
        </Box>
    );
}
