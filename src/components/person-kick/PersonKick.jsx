import React, { useContext } from 'react';
import {
    Box,
    Paper,
    Typography,
    Avatar,
    Button,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useTranslateText from '../../hooks/useTranslationText';
import { CustomThemeContext } from '../../contexts/CustomThemeContext.';
import { LanguageContext } from '../../contexts/LanguageContext';
import PersonOffIcon from '@mui/icons-material/PersonOff';

export default function PersonKick({
    onClose
}) {
    const translation = useTranslateText();
    const { resetDefaultTheme } = useContext(CustomThemeContext)
    const { languageResetDefaultHandler } = useContext(LanguageContext)

    const resetHandler = () => {
        resetDefaultTheme();
        languageResetDefaultHandler();
    }

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
                    <PersonOffIcon />
                </Avatar>

                <Typography variant="h5" component="h1" fontWeight={600}>
                    Do you want to kick this person
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={onClose}
                            color="primary"
                            sx={{ minWidth: '170px'}}
                        >
                            {translation.cancel}
                        </Button>
                        <Button
                            variant="contained"
                            onClick={resetHandler}
                            color="primary"
                            sx={{ minWidth: '170px'}}
                        >
                            {translation.confirm}
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
