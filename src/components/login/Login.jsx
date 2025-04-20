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

export default function LoginForm() {
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
      <Typography variant="h5">Login</Typography>
      
      <TextField label="Email" variant="outlined" fullWidth />
      <TextField label="Password" type="password" variant="outlined" fullWidth />
      
      <Button variant="contained" color="primary" fullWidth>
        Sign In
      </Button>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account?{' '}
        <Link href="/register" underline="hover">
          Sign up here
        </Link>
      </Typography>
    </Box>
  );
}
