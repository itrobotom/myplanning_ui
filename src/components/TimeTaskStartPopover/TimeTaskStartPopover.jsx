//СДЕЛАТЬ В ПОПОВЕРЕ ПЕРЕКЛЮЧАТЕЛЬ: ДАТА ОКОНЧАНИЯ ТА ЖЕ
//сделать один компонент на дату старта и дату финиша, но вопрос по иконкам, их через пропсы?
import React, { useState } from 'react';
import { IconButton } from "@mui/material";
import Popover from '@mui/material/Popover';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import dayjs from 'dayjs';

function TimeTaskStartPopover({timeStart, setTimeStart}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(`sadfassafd ${timeStart}`)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);
    console.log('состояние поповера' + open)
    const id = open ? 'simple-popover' : undefined;

    const handleDateStart = (event) => {
        console.log(`Выбрали дату начала задачи ${event}`);
        // setTimeEnd(dayjs(String(event)).format('DD.MM.YY'));
        setTimeStart(event);  
        setSelectedDate(event);
    }
    const getInitialDate = () => {
        if(!timeStart) return null;
        // Проверка, является ли значение dayjs-объектом
        if (dayjs.isDayjs(timeStart)) return timeStart;
        if (typeof timeStart === 'string') {
            // Пробуем разные форматы парсинга
            const parsedDate = dayjs(timeStart, ['DD.MM.YY', 'ddd, DD MMM YYYY HH:mm:ss [GMT]'], true);
            return parsedDate.isValid() ? parsedDate : null;
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
                <OutlinedFlagIcon 
                    fontSize="medium" 
                    sx={{ color: 'action.active' }} 
                />
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
                        onChange={handleDateStart}  
                        //value={typeof timeEnd === 'string' ? dayjs(new Date(timeEnd)) : timeEnd}
                        value={selectedDate}
                    />
                </LocalizationProvider>
            </Popover>
        </>
            
    )
}

export {TimeTaskStartPopover}