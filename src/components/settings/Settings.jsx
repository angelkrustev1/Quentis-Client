import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Avatar,
    Button,
    IconButton,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import ThemeOptions from './theme-options/ThemeOptions';
import LanguageOptions from './language-options/LanguageOptions';
import useTranslateText from '../../hooks/useTranslationText';

export default function Settings({
    onClose
}) {
    const translation = useTranslateText();

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <Box
            onClick={onClose}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper
                onClick={(e) => e.stopPropagation()}
                elevation={6}
                sx={{
                    position: 'relative',
                    p: 4,
                    maxWidth: 420,
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <SettingsIcon />
                </Avatar>

                <Typography variant="h5" component="h1" fontWeight={600}>
                    {translation.settings}
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        width: '100%',
                    }}
                >
                    {/* Side-by-side theme options with space-between */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <ThemeOptions />
                        <LanguageOptions />
                    </Box>

                    <Button type="submit" variant="contained" color="primary">
                        {translation.reset}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}
