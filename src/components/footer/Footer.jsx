import React, { useTransition } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useTranslateText from '../../hooks/useTranslationText';

export default function Footer() {
  const theme = useTheme();
  const translation = useTranslateText();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.text.primary,
        color: theme.palette.text.secondary,
        py: 2,
        textAlign: 'center',
        mt: 4,
        boxShadow: 3,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} {translation.footer}
        </Typography>
      </Container>
    </Box>
  );
};