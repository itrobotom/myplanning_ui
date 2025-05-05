import React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Button, Popover, Typography, IconButton, FormControl, FormLabel, RadioGroup, Radio, Checkbox, Box } from "@mui/material";
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'; //часы финиша (время закончилось)
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'; //календарь (финиш задачи)
import { useState, useReducer, useEffect } from 'react';

function TimeTask({ isEditTask }) {
    return (
        <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            px: 1,
            py: 0.5
        }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <OutlinedFlagIcon 
                    fontSize="medium" 
                    sx={{ color: 'action.active' }} 
                />
                <Typography variant="body2">12.12.12</Typography>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <InsertInvitationIcon 
                    fontSize="small" 
                    sx={{ color: 'action.active' }} 
                />
                <Typography variant="body2">12.12.12</Typography>
            </Box>
        </Box>
    );
}

export {TimeTask}