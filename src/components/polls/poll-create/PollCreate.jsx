import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function PollCreate ({ onCreate }) {
  return (
    <Button
      variant="contained"
      onClick={onCreate}
      startIcon={<AddIcon />}
      sx={{ width: '100%', mt: 3, mb: 3, borderRadius: 3, textTransform: 'none', fontWeight: 'bold' }}
    >
      Create Poll
    </Button>
  );
};

