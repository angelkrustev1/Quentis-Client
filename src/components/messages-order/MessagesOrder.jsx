import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

export default function MessagesOrder({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl
        fullWidth
        size="small"
        sx={{
          borderRadius: 2,
          backgroundColor: 'background.paper',
          boxShadow: 1,
        }}
      >
        <InputLabel id="order-label">Order By</InputLabel>
        <Select
          labelId="order-label"
          id="order-select"
          value={value}
          label="Order By"
          onChange={handleChange}
          sx={{ borderRadius: 2 }}
        >
          <MenuItem value="newest">
            <ArrowDownwardIcon fontSize="small" sx={{ mr: 1 }} />
            Newest
          </MenuItem>
          <MenuItem value="oldest">
            <ArrowUpwardIcon fontSize="small" sx={{ mr: 1 }} />
            Oldest
          </MenuItem>
          <MenuItem value="most_liked">
            <ThumbUpAltOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            Most Liked
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
