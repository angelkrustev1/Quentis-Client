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
        }}
      >
        <ListItemAvatar sx={{ cursor: 'pointer' }} onClick={onOpen}>
          <Avatar alt="Ali Connors" src="/static/images/avatar/1.jpg">
            OP
          </Avatar>
        </ListItemAvatar>

        <Box sx={{ flex: 1, pl: 2, position: 'relative' }}>
          {/* Delete/History icon positioned top right */}
          <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
            {
              false  // Adjust this condition to decide whether to show delete or history icon
                ? <IconButton
                    size="medium"
                    color="error"
                    aria-label="delete message"
                    sx={{ cursor: 'pointer' }}
                  >
                    <DeleteOutlineIcon fontSize="medium" />
                  </IconButton>
                : <IconButton
                    size="medium"
                    color="error"
                    aria-label="history message"
                    sx={{ cursor: 'pointer' }}
                  >
                    <HistoryIcon fontSize="medium" />
                  </IconButton>
            }
          </Box>

          {/* User info */}
          <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
            Ali Connors
          </Typography>

          {/* Message content */}
          <Typography variant="body2" color="text.primary" sx={{ mt: 0.5 }}>
            Why is the sky blue, and does it change based on location or time of day? I’ve always wondered how the atmosphere works when traveling to different regions.
          </Typography>

          {/* Actions: Like & Timestamp */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
            <Typography variant="caption" color="text.secondary">
              2 hours ago
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton size="medium" color="primary">
                <ThumbUpAltOutlinedIcon fontSize="medium" />
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
