import {
    Avatar,
    Box,
    Button,
    IconButton,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CloseIcon from "@mui/icons-material/Close";
import useTranslateText from "../../hooks/useTranslationText";

export default function RoomCreate({
    onClose,
}) {
    const translation = useTranslateText();

    return (
        <Box
            onClick={onClose}
            sx={{
                position: "fixed", // Changed to fixed to cover the entire screen
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                zIndex: 5,
            }}
        >
            <Box
                onClick={(e) => e.stopPropagation()}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                    width: "100%",
                    maxWidth: 400,
                }}
            >
                <Paper
                    elevation={10}
                    sx={{
                        position: "relative",
                        p: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
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
                        <GroupAddIcon />
                    </Avatar>
                    <Typography variant="h5">{translation.launchRoom}</Typography>

                    <Box
                        component="form"
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Access Code"
                            variant="outlined"
                            fullWidth
                            required
                        />

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            {translation.create}
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
