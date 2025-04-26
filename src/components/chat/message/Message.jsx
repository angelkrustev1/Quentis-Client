import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Paper from '@mui/material/Paper';
import HistoryIcon from '@mui/icons-material/History';
import PersonKick from '../../person-kick/PersonKick';

export default function Message({
  open,
  onOpen,
  onClose,
}) {
  return (
    <>
      <ListItem
        component={Paper}
        elevation={3}
        alignItems="flex-start"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          width: '100%',
          bgcolor: 'background.default',
          borderRadius: 2,
          p: 2,
          mb: 2,
          flexDirection: 'column',
        }}
      >
        {/* Top bar: date and icon */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography
            variant="caption"
            color="text.special"
            sx={{
              fontSize: '0.75rem',
            }}
          >
            Apr 25, 2025
          </Typography>

          {
            false // Change this to toggle between delete and history
              ? (
                <IconButton size="small" color="error">
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton size="small" color="error">
                  <HistoryIcon fontSize="small" />
                </IconButton>
              )
          }
        </Box>

        {/* Content row: avatar + message */}
        <Box sx={{ display: 'flex', width: '100%' }}>
          <ListItemAvatar sx={{ cursor: 'pointer' }} onClick={onOpen}>
            <Avatar alt="Ali Connors" src="/static/images/avatar/1.jpg">
              OP
            </Avatar>
          </ListItemAvatar>

          <Box sx={{ flex: 1, pl: 2 }}>
            {/* User name */}
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
              Ali Connors
            </Typography>

            {/* Message text */}
            <Typography variant="body2" color="text.primary" sx={{ mt: 0.5 }}>
              Why is the sky blue, and does it change based on location or time of day? I’ve always wondered how the atmosphere works when traveling to different regions.
            </Typography>

            {/* Like button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 3 }}>
              <IconButton size="small" color="primary">
                <ThumbUpAltOutlinedIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2" sx={{ ml: 0.5 }}>
                12
              </Typography>
            </Box>
          </Box>
        </Box>
      </ListItem>
      {open && <PersonKick onClose={onClose} />}
    </>
  );
}
