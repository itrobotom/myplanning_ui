import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchTask() {
    
    return (
        <TextField
            placeholder="Поиск..."
            variant="outlined"
            size="small"
            sx={{ 
            width: '300px', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '4px' 
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export {SearchTask}