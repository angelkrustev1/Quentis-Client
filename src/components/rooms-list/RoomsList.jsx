import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
    List,
    ListItem,
    Typography,
    Paper,
} from '@mui/material';
import Search from '../search/Search';
import useRoomUpdate from '../room-update/useRoomUpdate';
import useRoomDelete from '../room-delete/useRoomDelete';
import RoomDelete from '../room-delete/RoomDelete';
import RoomUpdate from '../room-update/RoomUpdata';
import useTranslateText from '../../hooks/useTranslationText';
import RoomItem from './room-item/RoomItem';

const StyledList = styled(List)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:last-child': {
        borderBottom: 'none',
    },
    transition: 'background-color 0.2s ease',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export default function RoomsList() {
    const translation = useTranslateText();
    const { showEdit, editShowHandler, editCloseHanlder } = useRoomUpdate();
    const { showDelete, deleteShowHandler, deleteCloseHandler } = useRoomDelete();

    // Later replace with real rooms
    const dummyRooms = [0, 1, 2];

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752, mx: "auto", p: 2 }}>
            {/* Title and Search */}
            <Box
                sx={{
                    mt: 4,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    {translation.ownedRooms}
                </Typography>
                <Search />
            </Box>

            {/* Rooms List */}
            <Paper elevation={1}>
                <StyledList dense>
                    {dummyRooms.map((_, index) => (
                        <RoomItem
                            key={index}
                            onEdit={editShowHandler}
                            onDelete={deleteShowHandler}
                        />
                    ))}
                </StyledList>
            </Paper>

            {/* Modals */}
            {showDelete && <RoomDelete onClose={deleteCloseHandler} />}
            {showEdit && <RoomUpdate onClose={editCloseHanlder} />}
        </Box>
    );
}
