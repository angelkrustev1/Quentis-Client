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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import useTranslateText from '../../hooks/useTranslationText';

export default function Register() {
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
                <PersonAddIcon />
            </Avatar>
            <Typography variant="h5">{translation.register}</Typography>

            {/* Form starts here */}
            <Box
                component="form"
                sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <TextField label="First Name" variant="outlined" fullWidth required />
                <TextField label="Last Name" variant="outlined" fullWidth required />
                <TextField label="Email" type="email" variant="outlined" fullWidth required />
                <TextField label="Password" type="password" variant="outlined" fullWidth required />
                <TextField label="Confirm Password" type="password" variant="outlined" fullWidth required />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {translation.signUp}
                </Button>
            </Box>

            <Typography variant="body2" sx={{ mt: 2 }}>
                Already have an account?{' '}
                <Link href="/login" underline="hover">
                    {translation.signInHere}
                </Link>
            </Typography>
        </Box>
    );
}

