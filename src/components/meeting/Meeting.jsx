import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HistoryIcon from '@mui/icons-material/History';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Divider, Paper } from '@mui/material';
import MessagesOrder from '../messages-order/MessagesOrder';
import Chat from '../chat/Chat';
import PollIcon from '@mui/icons-material/Poll';
import Polls from '../polls/Polls';
import useTranslateText from '../../hooks/useTranslationText';

export default function Meeting() {
  const [value, setValue] = useState(0);
  const [messagesOpen, setMessagesOpen] = useState(true);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [pollsOpen, setPollsOpen] = useState(false);
  const translation = useTranslateText();

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 0) {
      setMessagesOpen(true);
      setHistoryOpen(false);
      setPollsOpen(false);
    } else if (newValue === 1) {
      setMessagesOpen(false);
      setPollsOpen(true);
      setHistoryOpen(false);
    } else if (newValue === 2) {
      setMessagesOpen(false);
      setPollsOpen(false);
      setHistoryOpen(true);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={1}
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        p: 2,
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{ flexShrink: 0 }}
      >
        <Tab
          label={
            <Stack direction="row" alignItems="center" spacing={1}>
              <QuestionAnswerIcon fontSize="small" color="primary" />
              <Typography>{translation.questions}</Typography>
            </Stack>
          }
        />
        <Tab
          label={
            <Stack direction="row" alignItems="center" spacing={1}>
              <PollIcon fontSize="small" color="primary" />
              <Typography>{translation.polls}</Typography>
            </Stack>
          }
        />
        <Tab
          label={
            <Stack direction="row" alignItems="center" spacing={1}>
              <HistoryIcon fontSize="small" color="primary" />
              <Typography>{translation.history}</Typography>
            </Stack>
          }
        />
      </Tabs>

      <Divider sx={{ flexShrink: 0 }} />

      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 4,
          flexShrink: 0,
        }}
      >
        <Typography variant="h6">Room Name</Typography>
        <MessagesOrder />
      </Box>

      {/* Chat area */}
      <Box
        sx={{
          flexGrow: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {messagesOpen && <Chat messagesOpen={messagesOpen} historyOpen={historyOpen} />}
        {pollsOpen && <Polls />}
      </Box>
    </Box>
  );
}
