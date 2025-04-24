import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Message from './message/Message';
import { useState } from 'react';

export default function Chat() {
    const [kickOpen, setKickOpen] = useState(false)
    const kickOpenHandler = () => setKickOpen(true)
    const kickCloseHandler = () => setKickOpen(false)

  return (
    <Box sx={{ width: '100%' }}>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Message open={kickOpen} onOpen={kickOpenHandler} onClose={kickCloseHandler} />
      </List>
    </Box>
  );
}
