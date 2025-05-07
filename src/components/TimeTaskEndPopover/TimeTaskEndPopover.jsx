import React, { useEffect, useState } from 'react';
import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon } from "@mui/material";
import Popover from '@mui/material/Popover';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'; //календарь (финиш задачи)
import dayjs from 'dayjs';

function TimeTaskEndPopover({timeEnd, setTimeEnd}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(`sadfassafd ${timeEnd}`)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);
    console.log('состояние поповера' + open)
    const id = open ? 'simple-popover' : undefined;

    const handleDateEnd = (event) => {
        console.log(`Выбрали дату окончания задачи ${event}`);
        // setTimeEnd(dayjs(String(event)).format('DD.MM.YY'));
        setTimeEnd(event);
        
        setSelectedDate(event);
    }
    const getInitialDate = () => {
        if(!timeEnd) return null;
        // Проверка, является ли значение dayjs-объектом
        if (dayjs.isDayjs(timeEnd)) return timeEnd;
        if (typeof timeEnd === 'string') {
            // Пробуем разные форматы парсинга
            const parsed = dayjs(timeEnd, ['DD.MM.YY', 'ddd, DD MMM YYYY HH:mm:ss [GMT]'], true);
            return parsed.isValid() ? parsed : null;
        }
        return null;
    }

    const [selectedDate, setSelectedDate] = useState(getInitialDate());
    return(
        <>
            <IconButton 
                // className={isLearnMode ? 'rotatePause' : 'noAnimation'}
                aria-describedby={id} variant="contained" onClick={handleOpen}
            >
                <InsertInvitationIcon 
                    fontSize="small" 
                    sx={{ color: 'action.active' }} 
                ></InsertInvitationIcon>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose} 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar 
                        onChange={handleDateEnd}  
                        //value={typeof timeEnd === 'string' ? dayjs(new Date(timeEnd)) : timeEnd}
                        value={selectedDate}
                    />
                </LocalizationProvider>
            </Popover>
        </>
            
    )
}

export {TimeTaskEndPopover}