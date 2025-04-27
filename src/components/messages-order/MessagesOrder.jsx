import React, { useState } from 'react'; // <-- Add useState

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
import useTranslateText from '../../hooks/useTranslationText';

export default function MessagesOrder({ value, onChange }) {
  const [internalValue, setInternalValue] = useState('newest');
  const translation = useTranslateText();

  const handleChange = (event) => {
    setInternalValue(event.target.value);
    onChange?.(event.target.value); // only call onChange if it's passed
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
        <InputLabel id="order-label">{translation.orderBy}</InputLabel>
        <Select
          labelId="order-label"
          id="order-select"
          value={value ?? internalValue} // fallback to internalValue if value is undefined
          label={translation.orderBy}
          onChange={handleChange}
          sx={{ borderRadius: 2 }}
        >
          <MenuItem value="newest">
            <ArrowDownwardIcon fontSize="small" sx={{ mr: 1 }} />
            {translation.newest}
          </MenuItem>
          <MenuItem value="oldest">
            <ArrowUpwardIcon fontSize="small" sx={{ mr: 1 }} />
            {translation.oldest}
          </MenuItem>
          <MenuItem value="most_liked">
            <ThumbUpAltOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            {translation.mostLiked}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
