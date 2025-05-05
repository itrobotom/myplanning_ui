// в поповере 
// на каждой строке будет своя настройка, напротив нужно чекбоксом выбрать какой тип повтора
// не повторять, ежедневно, -еженедельно (от даты создания!), -ежемесячно (от даты создания!), -ежегодно (от даты создания!)
// выбор дней: -галочки рядом с пн, вт, ср, чт, пт, сб, вс
// в одной строке выбор чекбоксом дней недели и рядом галочками дни
// в другой строке несколько вариантов, или все в столбик, посмотреть как будет выглядеть 

import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Button, Popover, Typography, IconButton, FormControl, FormLabel, RadioGroup, Radio, Checkbox } from "@mui/material";
import RepeatIcon from '@mui/icons-material/Repeat';
import { useState, useReducer, useEffect } from 'react';

const SET_REPEAT_MODE = "SET_REPEAT_MODE"
const CHOOSE_DAYS_REPEAT = "CHOOSE_DAYS_REPEAT"

//хранится все в базе, приходит на клиент и уходит назад в виде значений noRepeat, everyday....
const repeatMode = {
    NO_REPEAT: "noRepeat",
    EVERYDAY: "everyday",
    EVERY_WEEK: "everyWeek",
    EVERY_MONTH: "everyMonth",
    EVERY_YEAR: "everyYear",
    CHOOSE_DAYS: "chooseDays"
}

const daysOfWeekObj = {
    MON: "пн",
    TUE: "вт",
    WED: "ср",
    THU: "чт",
    FRI: "пт",
    SAT: "сб",
    SUN: "вс"
}

//const daysOfWeek = []; // будем хранить выбранные дни, по дефолту пусто



//ДОБАВИТЬ КРЕСТИК ЗАКРЫТИЯ ПОПОВЕРА



//экшены в виде функции
const setRepeatMode = (payload) => {
    return {
        type: SET_REPEAT_MODE,
        payload
    }
}
const chooseDaysRepeat = (payload) => {
    return {
        type: CHOOSE_DAYS_REPEAT,
        payload
    }
}
//редьюсер для смены настроек повторов
function reducerRepeatTask(repeatSettings, action) {
    switch(action.type) {           
        //вызывается каждый раз, когда изменяется режим, забриается ответ из радиокнопки
        case SET_REPEAT_MODE:
            return ({...repeatSettings,
                //из payload Надо достать именно режим, т.к. в нем еще могут лежать и дни недели
                repeatMode: action.payload //загружаем режим повторов
            }) 

        case CHOOSE_DAYS_REPEAT:
            if (repeatSettings.repeatMode !== repeatMode.CHOOSE_DAYS) { //на всякий случай проверка
                return repeatSettings;
            }
            //может и смысла проверок нет??? мы же не сможем менять галочки, пока не будет выбран режим CHOOSE_DAYS 
            //вообще да, поидее чекбоксы дней должны быть заблокированы, пока не будет выбран режим CHOOSE_DAYS
            //if(repeatSettings.repeatMode === repeatMode.CHOOSE_DAYS){
            const day = action.payload;
            const updateDays = repeatSettings.daysRepeat.includes(day)
            ? repeatSettings.daysRepeat.filter(d => (day !== d)) //удаляем день, не пишем return т.к. стрелочная функция и всего одно выражение
            : [... repeatSettings.daysRepeat, day]
            return ({...repeatSettings,
                daysRepeat: updateDays
            }) 
            //}   

            // else {
            //     return {...repeatSettings}
            // }

        default:
            return {...repeatSettings}
    }
}


function SelectRepeatTaskPopover ({isLearnMode, isEditTask, repeatSettingsObj}) {
    // const [repeatStatus, setRepeatStatus] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () =>{
        setAnchorEl(null);
    }

    const initRepeatSettings = {
        //repeatStatus: false,
        repeatMode: repeatMode.NO_REPEAT, //noRepeat, everyday, everyWeek, everyMonth, everyYear, choiceDays
        daysRepeat: [] //["sun", "mon", "tu", "we", "th", "fr", "sat"]
    }

    const [repeatSettings, dispatch] = useReducer(reducerRepeatTask, repeatSettingsObj || initRepeatSettings); //если с пропсов режим не придет, проинициализируем тем, что внутри компонента
    
    const repeatSettingsExample = {
        //repeatStatus: true,
        repeatMode: "everyday", //noRepeat, everyday, everyWeek, everyMonth, everyYear, choiceDays
        daysRepeat: ["tu", "fr"] //["sun", "mon", "tu", "we", "th", "fr", "sat"]
    }
    // const toggleRepeat = () => {
    //     setRepeatStatus((prev) => !prev); 
    // }

    const handleSetRepeatMode = (mode) => {
        console.log('Выбран режим повтора:', mode);
        console.log('В редьюсере после выбора режима:', repeatSettings);
        dispatch(setRepeatMode(mode));
    }
    const handleToggleDay = (day) => {
        console.log('Выбраны дни повтора:', day);
        console.log('В редьюсере после выбора дней:', repeatSettings);
        dispatch(chooseDaysRepeat(day));
    }
    // useEffect(()=> {
    //     console.log(`Настройки режима повтора ${repeatSettings}`)
    // }, [])

    return(
        <>
            {/* радиокнопки для выбора режима повторов */}
            <IconButton onClick={handleOpen}>
                <RepeatIcon></RepeatIcon>
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
                        width: repeatSettings.repeatMode === repeatMode.CHOOSE_DAYS ? '350px' : '250px',
                        transition: 'width 0.3s ease',
                        overflow: 'hidden'
                    }
                }}
            >
                <FormControl
                    style={{padding: "10px"}}
                >
                    <FormLabel id="radio-repeat-mode">Режим повторов</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-repeat-mode"
                        defaultValue={repeatSettings.repeatMode}
                        name="radio-buttons-group"
                        onChange={(event) => handleSetRepeatMode(event.target.value)}
                    >
                        <FormControlLabel
                            control={<Radio />}
                            label="не повторять"
                            value={repeatMode.NO_REPEAT}
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="ежедневно"
                            value={repeatMode.EVERYDAY}
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="еженедельно"
                            value={repeatMode.EVERY_WEEK}
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="ежемесячно"
                            value={repeatMode.EVERY_MONTH}
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="ежегодно"
                            value={repeatMode.EVERY_YEAR}
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="дни недели"
                            value={repeatMode.CHOOSE_DAYS}
                        />
                    </RadioGroup>
                </FormControl>
                {/* чекбоксы с днями неделями, отображать только когда включиться режим выбора дней (его как раз нижним поставить) */}
                {repeatSettings.repeatMode === repeatMode.CHOOSE_DAYS && (
                    <FormControl 
                        component="fieldset"
                        style={{paddingLeft: "10px"}}
                    >
                        {/* <FormLabel component="legend">Выберете дни</FormLabel> */}
                        <FormGroup>
                            {/* <Typography variant='subtitle1'>Выберете дни:</Typography> */}
                            {Object.entries(daysOfWeekObj).map(([key, value]) => (
                                <FormControlLabel
                                    key={key}
                                    control={
                                        <Checkbox
                                            // проверим, включен ли день недели для верной отрисовки
                                            checked={repeatSettings.daysRepeat.includes(key)}
                                            onChange={() => handleToggleDay(key)}
                                            value={key}
                                        />
                                    }
                                    label={value}
                                    labelPlacement='end'
                                />
                            ))}  
                        </FormGroup>
                    </FormControl>
                )}
            </Popover>
            
        </>
    );
}

export {SelectRepeatTaskPopover}