import { useContext, useState } from 'react';
import {
    Button,
    Menu,
    MenuItem,
    Fade
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CustomThemeContext } from '../../../contexts/CustomThemeContext.';
import crimsonNauticaTheme from '../../../styles/CrimsonNauticaTheme';
import autumnGroveTheme from '../../../styles/AutumnGroveTheme';
import verdantClayTheme from '../../../styles/VerdantClayTheme';
import TropicalSorbetTheme from '../../../styles/TropicalSorbetTheme';
import NeonNauticaTheme from '../../../styles/NeonNauticaTheme';
import useTranslateText from '../../../hooks/useTranslationText';

export default function ThemeOptions() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const translation = useTranslateText();
    const { changeCustomThemeHandler } = useContext(CustomThemeContext)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const chooseThemeHandler = (theme) => {
        setAnchorEl(null);
        changeCustomThemeHandler(theme)
    }

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
                    color: theme.palette.background.default,
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
                {translation.theme}
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
                <MenuItem onClick={() => chooseThemeHandler(crimsonNauticaTheme)}>
                    {translation.crimsonNautica}
                </MenuItem>
                <MenuItem onClick={() => chooseThemeHandler(NeonNauticaTheme)}>
                    {translation.neonNautica}
                </MenuItem>
                <MenuItem onClick={() => chooseThemeHandler(TropicalSorbetTheme)}>
                    {translation.tropicalSorbet}
                </MenuItem>
                <MenuItem onClick={() => chooseThemeHandler(verdantClayTheme)}>
                    {translation.verdantClay}
                </MenuItem>
                <MenuItem onClick={() => chooseThemeHandler(autumnGroveTheme)}>
                    {translation.autumnGrove}
                </MenuItem>
            </Menu>
        </div>
    );
}
