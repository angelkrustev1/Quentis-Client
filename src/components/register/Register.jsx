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

export default function Register() {
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
            <Typography variant="h5">Register</Typography>

            <TextField label="Full Name" variant="outlined" fullWidth />
            <TextField label="Email" type="email" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />
            <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
            />

            <Button variant="contained" color="primary" fullWidth>
                Sign up
            </Button>

            <Typography variant="body2" sx={{ mt: 2 }}>
                Already have an account?{' '}
                <Link href="/login" underline="hover">
                    Sign in here
                </Link>
            </Typography>
        </Box>
    );
}
