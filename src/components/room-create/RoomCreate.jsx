import { Avatar, Box, Paper } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function RoomCreate() {
    return (
        <Box
            component={Paper}
            elevation={3}
            sx={{
                maxWidth: 300,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                p: 2,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Avatar sx={{ bgcolor: 'primary.main' }}>

            </Avatar>
        </Box>
    );
}