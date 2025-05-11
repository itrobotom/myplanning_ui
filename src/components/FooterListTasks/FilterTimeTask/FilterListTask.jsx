import WorkspacesIcon from '@mui/icons-material/Workspaces'; // Без "Filled"
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined'; // Контурная
import { Button, Popover, Box, Typography, IconButton, FormControl, FormLabel, RadioGroup, Radio, Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from 'react';

const typeFilter = {
    TODAY: "today", 
    WEEK: "week",
    COMPLETED: "completed",
    EXPIRED: "expired",
    FUTURE: "future",
    ALL: "all",
}
const NOTICE_OPTION = [
    {value: typeFilter.TODAY, label: "сегдня"},
    {value: typeFilter.WEEK, label: "на неделю"},
    {value: typeFilter.COMPLETED, label: "завершенные"},
    {value: typeFilter.EXPIRED, label: "просроченные"},
    {value: typeFilter.FUTURE, label: "будущие"},
    {value: typeFilter.ALL, label: "все"}
]
function FilterListTask() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () =>{
        setAnchorEl(null);
    }

    const [filterTask, setFilterTask] = useState(typeFilter.TODAY)
    const handleSetFilterTask = (mode) => {
        console.log('Выбран режим уведомления:', mode);
        setFilterTask(mode);
    }

    return(
        <Box
            sx={{
                marginTop: "10px"
            }}
        >
            <IconButton onClick={handleOpen}>
                <WorkspacesIcon sx={{ fill: 'currentColor' }} />
            </IconButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{
                    '& .MuiPaper-root': {
                        display: 'flex',
                        padding: '16px',
                        width: '250px',
                        transition: 'width 0.3s ease',
                        overflow: 'hidden'
                    }
                }}
            >
                <FormControl
                    style={{padding: "10px"}}
                >
                    <FormLabel id="radio-repeat-mode">Фильтр</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-repeat-mode"
                        defaultValue={filterTask}
                        name="radio-buttons-group"
                        onChange={(event) => handleSetFilterTask(event.target.value)}
                    >
                        {NOTICE_OPTION.map((option) => (
                            <FormControlLabel
                                key={option.value}
                                control={<Radio />}
                                label={option.label}
                                value={option.value}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Popover>
        </Box>   
    );
}

export {FilterListTask}