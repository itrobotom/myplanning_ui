import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Button, Popover, Typography, IconButton, FormControl, FormLabel, RadioGroup, Radio, Checkbox } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useReducer, useEffect } from 'react';

const noticeMode = {
    NOT_NOTICE: "not_notice", 
    BEFORE_DAY: "before_day",
    BEFORE_FREE_DAY: "before_free_day",
    BEFORE_MONTH: "before_month",
}
const NOTICE_OPTION = [
    {value: noticeMode.NOT_NOTICE, label: "не повторять"},
    {value: noticeMode.BEFORE_DAY, label: "за сутки"},
    {value: noticeMode.BEFORE_FREE_DAY, label: "за три дня"},
    {value: noticeMode.BEFORE_MONTH, label: "за месяц"}
]

function NoticeTaskPopover ({noticeTask, setNoticeTask}) {
    // const [repeatStatus, setRepeatStatus] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () =>{
        setAnchorEl(null);
    }

    const handleSetNotice = (mode) => {
        console.log('Выбран режим уведомления:', mode);
        setNoticeTask(mode);
    }

    return(
        <>
            {/* радиокнопки для выбора режима уведомлений */}
            <IconButton onClick={handleOpen}>
                <NotificationsNoneIcon></NotificationsNoneIcon>
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
                    <FormLabel id="radio-repeat-mode">Уведомления</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-repeat-mode"
                        defaultValue={noticeTask}
                        name="radio-buttons-group"
                        onChange={(event) => handleSetNotice(event.target.value)}
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
        </>
    );
}

export {NoticeTaskPopover}