// в поповере вначале вкючатель повторения
// на каждой строке будет своя настройка, напротив нужно чекбоксом выбрать какой тип повтора чекбоксом
// ежедневно, -еженедельно (от даты создания!), -ежемесячно (от даты создания!), -ежегодно (от даты создания!)
// выбор дней: -галочки рядом с пн, вт, ср, чт, пт, сб, вс
// в одной строке выбор чекбоксом дней недели и рядом галочками дни
// в другой строке несколько вариантов, или все в столбик, посмотреть как будет выглядеть 

import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, Popover, Typography, IconButton } from "@mui/material";
import { useState, useReducer } from 'react';


//редьюсер для смены настроек повторов

function reducerRepeatTask(repeatSettings, action) {
    switch(action.type) {
        case TOGGLE_REPEAT:
            if(repeatStatus) {
                return ({...repeatSettings,
                    repeatStatus: !repeatStatus,
                    repeatMode: everyday, //дефолтно ставим повтор каждый день
                });
            }
            else {
                return ({...repeatSettings,
                    repeatStatus: !repeatStatus,
                    repeatMode: null,
                });
            }
            
        case REPEAT_MODE:
            return ({...repeatSettings,
                //из payload Надо достать именно режим, т.к. в нем еще могут лежать и дни недели
                repeatMode: action.payload //загружаем режим повторов
            }) 
    }
}


function SelectRepeatTaskPopover ({isLearnMode, isEditTask, repeatSettignsObj}) {
    // const [repeatStatus, setRepeatStatus] = useState(false);

    const initRepeatSettings = {
        repeatStatus: false,
        repeatMode: null, //everyday, everyWeek, everyMonth, everyYear, choiceDays
        choiceDaysRepeat: null //["sun", "mon", "tu", "we", "th", "fr", "sat"]
    }

    const [repeatSettings, dispatch] = useReducer(reducerRepeatTask, initRepeatSettings);
    
    

    const repeatSettingssss = {
        repeatStatus: true,
        repeatMode: "everyday", //everyday, everyWeek, everyMonth, everyYear, choiceDays
        choiceDaysRepeat: ["tu", "fr"] //["sun", "mon", "tu", "we", "th", "fr", "sat"]
    }
    const toggleRepeat = () => {
        setRepeatStatus((prev) => !prev); 
    }

    return(
        <>
            <FormGroup>
                <FormControlLabel
                    control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                    label="Small"
                />
                <FormControlLabel
                    control={<Switch checked={checked} onChange={toggleChecked} />}
                    label="Normal"
                />
            </FormGroup>
        </>
    );
}