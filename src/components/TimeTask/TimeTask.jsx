import React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Button, Popover, Typography, IconButton, FormControl, FormLabel, RadioGroup, Radio, Checkbox, Box } from "@mui/material";

import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'; //часы финиша (время закончилось)
import { useState, useReducer, useEffect } from 'react';
import { TimeTaskEndPopover } from '../TimeTaskEndPopover/TimeTaskEndPopover';
import { TimeTaskStartPopover } from '../TimeTaskStartPopover/TimeTaskStartPopover';

import dayjs from 'dayjs';

function TimeTask({timeStart, setTimeStart, timeEnd, setTimeEnd}) {
    
    
    return (

        <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            px: 1,
            pl: 0,
            // py: 0.5
        }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TimeTaskStartPopover timeStart={timeStart} setTimeStart={setTimeStart}></TimeTaskStartPopover>
                <Typography variant="body2">{dayjs(timeStart).format('DD.MM.YY')}</Typography>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TimeTaskEndPopover timeEnd={timeEnd} setTimeEnd={setTimeEnd}></TimeTaskEndPopover>
                <Typography variant="body2">{dayjs(timeEnd).format('DD.MM.YY')}</Typography>
            </Box>
        </Box>
    );
}

export {TimeTask}