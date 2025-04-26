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
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        p: 1.5,
        backgroundColor: "#fff",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", alignItems: "center" }}
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
          }}
        />
        <IconButton type="submit" color="primary" sx={{ ml: 1 }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default MessageForm;
