import { Avatar, Box, Button, IconButton, Paper, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useTranslateText from "../../hooks/useTranslationText";
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function PictureChange({
    onClose,
}) {
    const translation = useTranslateText();

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
                    maxWidth: 400,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                }}
            >
                <IconButton
                    onClick={onClose}
                    size="small"
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Avatar sx={{ bgcolor: "primary.main" }}>
                    <PersonPinIcon />
                </Avatar>
                <Typography variant="h5">{translation.changePicture}</Typography>

                <Box
                    component='form'
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <TextField
                        label='Image URL'
                        variant="outlined"
                        fullWidth
                        required
                    />

                    <Button
                        type="submit" variant="contained" color="primary" fullWidth>
                        {translation.update}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}