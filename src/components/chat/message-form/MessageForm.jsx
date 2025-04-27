import React, { useState } from "react";
import { Box, TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageForm = ({ onSend }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() === "") return;
        onSend(message.trim());
        setMessage("");
    };

    return (
        <Box sx={{ m: 2 }}>
            <Paper
                elevation={6}
                sx={{
                    width: "100%",
                    mx: "auto",     // Centered horizontally
                    my: 2,          // Small top and bottom margin
                    p: 1.5,
                    borderRadius: 3, // Slightly more rounded
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <TextField
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        variant="outlined"
                        fullWidth
                        size="small"
                        sx={{
                            backgroundColor: "#f5f5f5",
                            borderRadius: 2,
                            ".MuiOutlinedInput-notchedOutline": { border: "none" },
                            px: 1,
                        }}
                    />
                    <IconButton type="submit" color="primary">
                        <SendIcon />
                    </IconButton>
                </Box>
            </Paper>
        </Box>

    );
};

export default MessageForm;
