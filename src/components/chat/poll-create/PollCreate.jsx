import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function PollCreate ({ onClick }) {
  return (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      onClick={onClick}
      sx={{ mt: 3, mb: 3, borderRadius: 3, textTransform: 'none', fontWeight: 'bold' }}
    >
      Create Poll
    </Button>
  );
};

