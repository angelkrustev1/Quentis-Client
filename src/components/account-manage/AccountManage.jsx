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
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function AccountManage({
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
                        <ManageAccountsIcon />
                    </Avatar>
                    <Typography variant="h5">{translation.account}</Typography>

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
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            disabled
                        />

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            {translation.update}
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
