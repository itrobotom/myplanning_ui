import "./PriorityTaskPopever.css"
import React, { useEffect, useState } from 'react';
import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon } from "@mui/material";
import Popover from '@mui/material/Popover';

//import { StarIcon, RepeatIcon, DeleteOutlineIcon, NotificationsNoneIcon, EditIcon, SaveIcon, Error, Warning, CheckCircle } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'; //высокий приоритет
import WarningAmberIcon from '@mui/icons-material/WarningAmber'; //средний приоритет


//через закрашеное солнышко частично и полностью важность
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';

//цифрами 1, 2,3 приоритет
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';

function PriorityTaskPopever({priorityTask, handlePriorityTask}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        // Проверяем, был ли клик по той же кнопке, если да — закрываем Popover
        if (anchorEl === event.currentTarget) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClickPriority = (event) => {
        console.log(event.currentTarget.getAttribute('id'));
        handlePriorityTask(event.currentTarget.getAttribute('id'));
    }

    const handleClose = () => {
        setAnchorEl(null);
        console.log("Функция закрытия поповера вызвана")
    };

    const open = Boolean(anchorEl);
    console.log('состояние поповера' + open)
    const id = open ? 'simple-popover' : undefined;

    const choosePriorityTask = (status) => {
        switch(status) {
            case 1:
                return <Filter1Icon/>
            case 2:
                return <Filter2Icon/>
            case 3:
                return <Filter3Icon/>
        }
    }
    
    return(
        <Box>
            {/* // разные версии анимации иконки rotatePause, heartbeat, gentleSwing, softBlink, tilt
            // <IconButton 
            //     className={isLearnMode ? 'gentleSwing' : 'noAnimation'}
            //     aria-describedby={id} variant="contained" onClick={handleClick}
            // > */}

            <IconButton 
                // className={isLearnMode ? 'rotatePause' : 'noAnimation'}
                aria-describedby={id} variant="contained" onClick={handleClick}
            >
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
                    {/* <Typography sx={{ p: 2 }}>Is learn mode.</Typography> */}
                    <IconButton 
                        aria-describedby={id} variant="contained" onClick={handleClickPriority} id="priority1"
                    >
                        <Filter1Icon />
                    </IconButton>
                    <IconButton 
                        aria-describedby={id} variant="contained" onClick={handleClickPriority} id="priority2"
                    >
                        <Filter2Icon />
                    </IconButton>
                    <IconButton 
                        aria-describedby={id} variant="contained" onClick={handleClickPriority} id="priority3"
                    >
                        <Filter3Icon />
                    </IconButton>

                </Popover>

                {choosePriorityTask(priorityTask)}
            </IconButton>
            
        </Box>
    )

}

export {PriorityTaskPopever}