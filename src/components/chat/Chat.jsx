import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { useState } from 'react';
import MessageForm from './message-form/MessageForm';

export default function Chat({ messagesOpen, historyOpen }) {
  const [kickOpen, setKickOpen] = useState(false);
  const kickOpenHandler = () => setKickOpen(true);
  const kickCloseHandler = () => setKickOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        minHeight: 0,  // critical for flex + scroll
      }}
    >
      {/* Scrollable messages */}
      <List
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          width: '100%',
          bgcolor: 'background.paper',
        }}
      >
        {/* Messages */}
      </List>

      {/* Message form always pinned to bottom */}
      <Box sx={{}}>
        <MessageForm />
      </Box>
    </Box>
  );
}
