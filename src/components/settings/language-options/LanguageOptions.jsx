import { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  Fade
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function LanguageOptions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          bgcolor: theme.palette.background.special,
          fontSize: '0.9rem',
          px: 4,
          py: 0.4,
          minWidth: '170px',
          '&:hover': {
            backgroundColor: theme.palette.text.special,
            borderColor: theme.palette.text.special,
          },
        }}
        variant="outlined"
      >
        Language
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          sx: {
            width: 200,
            maxHeight: 250,
          },
        }}
      >
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>Spanish</MenuItem>
        <MenuItem onClick={handleClose}>French</MenuItem>
      </Menu>
    </div>
  );
}
