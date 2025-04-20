import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material/styles';

export default function LanguageOptions() {
    const [anchorEl, setAnchorEl] = React.useState(null);
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
                    fontSize: '0.9rem',  // Same font size for both buttons
                    px: 4,              // Consistent padding for both buttons
                    py: 0.4,            // Consistent height for both buttons
                    minWidth: '170px',   // Same width for both buttons
                    '&:hover': {
                        backgroundColor: theme.palette.text.special,  // Change to blue on hover
                        borderColor: theme.palette.text.special,      // Optional: change border color to blue
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
                        width: 200,       // Same width for both menus
                        maxHeight: 250,   // Same height for both menus
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
