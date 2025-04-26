import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  ListItemAvatar,
  ListItemText,
  Avatar,
  List,
  ListItem,
  IconButton,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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
  }));;

export default function RoomItem({
    onEdit,
    onDelete
}) {
    return (
        <StyledListItem
              secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="edit" onClick={onEdit} sx={{ mr: 1 }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Room Name"
                secondary="Room Description"
                sx={{ fontWeight: 'medium' }}
              />
            </StyledListItem>
    );
}