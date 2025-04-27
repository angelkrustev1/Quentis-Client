import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Poll from './poll/Poll';
import PollCreate from './poll-create/PollCreate';
import PollForm from './poll-form/PollForm';
import { useState } from 'react';

export default function Polls() {
    const [formOpen, setFormOpen] = useState(false);

    const formOpenHandler = () => setFormOpen(true);
    const formCloseHandler = () => setFormOpen(false);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                minHeight: 0, 
            }}
        >
            <Box
                sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                }}
            >
                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        flexGrow: 1,
                        overflowY: 'auto',
                    }}
                >
                    <Poll />
                </List>
            </Box>

            <Box sx={{ mt: 2 }}>
                <PollCreate onCreate={formOpenHandler} />
            </Box>

            {formOpen && <PollForm onClose={formCloseHandler} />}
        </Box>
    );
}
