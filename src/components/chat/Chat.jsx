import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Message from './message/Message';
import { useState } from 'react';
import Poll from './poll/Poll';

export default function Chat({
  messagesOpen,
  historyOpen,
  pollsOpen,
}) {
  const [kickOpen, setKickOpen] = useState(false)
  const kickOpenHandler = () => setKickOpen(true)
  const kickCloseHandler = () => setKickOpen(false)

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {messagesOpen && 
            <Message open={kickOpen} onOpen={kickOpenHandler} onClose={kickCloseHandler} />
          }
          {pollsOpen &&
            <Poll />
          }
        </List>
      </Box>
    </>
  );
}
