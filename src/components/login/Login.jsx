import React from 'react';
import {
    TextField,
    Button,
    Box,
    Typography,
    Paper,
    Avatar,
    Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useTranslateText from '../../hooks/useTranslationText';

export default function LoginForm() {
    const translation = useTranslateText();

    return (
        <Box
            component={Paper}
            elevation={3}
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 10,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Avatar sx={{ bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">{translation.login}</Typography>

            <Box component="form" sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Email" variant="outlined" fullWidth required />
                <TextField label="Password" type="password" variant="outlined" fullWidth required />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {translation.signIn}
                </Button>
            </Box>

            <Typography variant="body2" sx={{ mt: 2 }}>
                {translation.noAccount}{' '}
                <Link href="/register" underline="hover">
                    {translation.signUpHere}
                </Link>
            </Typography>
        </Box>
    );
}
