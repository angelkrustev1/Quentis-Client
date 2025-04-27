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
import useTranslateText from "../../../hooks/useTranslationText";
import { useState } from "react";

export default function PollForm({
    onClose,
}) {
    const MIN_OPTIONS = 2;
    const translation = useTranslateText();
    const [options, setOptions] = useState(MIN_OPTIONS)

    const addOptionHander = () => setOptions(options + 1);
    const removeOptionsHander = () => {
        if (options > MIN_OPTIONS) {
            setOptions(options - 1)
        };
    };

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
                    maxWidth: 420,
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
                    <Typography variant="h5">{translation.createPoll}</Typography>

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
                            label={translation.question}
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <Typography variant="h6">{translation.options}:</Typography>

                        {[...Array(options)].map((_, index) =>
                            <TextField
                                label={`${translation.option} ${index}`}
                                variant="outlined"
                                fullWidth
                                required
                            />)}

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
                                onClick={addOptionHander}
                                sx={{
                                    minWidth: '170px',
                                    backgroundColor: (theme) => theme.palette.text.primary,
                                    color: 'white',  // Ensure the text is white for visibility
                                    '&:hover': {
                                        backgroundColor: (theme) => theme.palette.action.hover,
                                    },
                                }}
                            >
                                {translation.add}
                            </Button>
                            <Button
                                variant="contained"
                                onClick={removeOptionsHander}
                                sx={{
                                    minWidth: '170px',
                                    backgroundColor: (theme) => theme.palette.text.primary,
                                    color: 'white',  // Ensure the text is white for visibility
                                    '&:hover': {
                                        backgroundColor: (theme) => theme.palette.action.hover,
                                    },
                                }}
                            >
                                {translation.remove}
                            </Button>
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            {translation.upload}
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
