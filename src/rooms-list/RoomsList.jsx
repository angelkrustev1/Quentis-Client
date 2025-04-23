import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Search from '../components/search/Search';
import useRoomUpdate from '../components/room-update/useRoomUpdate';
import useRoomDelete from '../components/room-delete/useRoomDelete';
import RoomDelete from '../components/room-delete/RoomDelete';
import RoomUpdate from '../components/room-update/RoomUpdata';
import useTranslateText from '../hooks/useTranslationText';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: (theme.vars || theme).palette.background.paper,
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        })
    );
}

export default function RoomsList() {
    const translation = useTranslateText();
    const { showEdit, editShowHandler, editCloseHanlder } = useRoomUpdate();
    const { showDelete, deleteShowHandler, deleteCloseHandler } = useRoomDelete();

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752, mx: "auto" }}>
            <Box
                sx={{
                    mt: 4,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2, // spacing between title and search
                }}
            >
                <Typography variant="h6" component="div" sx={{ whiteSpace: 'nowrap', fontSize: "1.75rem" }}>
                    {translation.ownedRooms}
                </Typography>
                <Search />
            </Box>
            <Demo>
                <List dense>
                    {generate(
                        <ListItem
                            secondaryAction={
                                <>
                                    <IconButton edge="end" aria-label="edit" sx={{ mr: 1 }} onClick={editShowHandler}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={deleteShowHandler}>
                                        <DeleteIcon />
                                    </IconButton>
                                </>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                    )}
                </List>
            </Demo>

            {showDelete && <RoomDelete onClose={deleteCloseHandler} />}
            {showEdit && <RoomUpdate onClose={editCloseHanlder} />}
        </Box>
    );
}
