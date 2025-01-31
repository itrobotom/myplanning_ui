import React, { useEffect, useState } from 'react';
import "./CardTask.css"
import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import RepeatIcon from '@mui/icons-material/Repeat';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
//import { StarIcon, RepeatIcon, DeleteOutlineIcon, NotificationsNoneIcon, EditIcon, SaveIcon, Error, Warning, CheckCircle } from '@mui/icons-material';
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



function CardTask({props}) {
    //если развернутая карточка задачи, то она выше
    //const heightCard = 200;
    //вытащим данные из стора по isCheckBoxTaskStatus, таким и будет далее стейт
    //а пока сделаем его просто по дефолту false
    const FULL_HEIGHT = 200;
    const SHORT_HEIGHT = 200;
    //const isLearnMode = true; 
    //const isFullTask = false; //все задачи в ленте свернуты, чтобы развернуть и увидеть все настройки и все содержимое, возомжность редактироват, надо нажать на саму задачу
    // const isCheckBoxTaskStatusDefault = false; 
    const [heightCard, setHeightCard] = useState(SHORT_HEIGHT); 
    const [statusTask, setStatusTask] = useState(false);
    const [isOpenTask, setIsOpenTask] = useState(true); 
    const [isEditTask, setIsEditTask] = useState(true);
    const [isLearnMode, setIsLearnMode] = useState(true); //режим обучения (включается возможность кликать по всем иконкам, получая подсказки)
    const [isRepetTask, setIsRepeatTask] = useState(true); 
    const [repeatDaysOfWeak, setRepeatDaysOfWeak] = useState(false); //при повторе по дням недели значек переносится вниз и указывадются дни недели рядом для повтора 
    const handleTaskStatus = () => { //при клике меняем статус
        setStatusTask(!statusTask);
        console.log(`Статус таски: ${statusTask}`);
    }
    const handleOpenTask = () => {
        setIsOpenTask(!isOpenTask);
        isOpenTask ? setHeightCard(FULL_HEIGHT) : setHeightCard(SHORT_HEIGHT);
        console.log(`Задача развернута ${isOpenTask}`); 
    }
    const handleEditTask = () => {
        setIsEditTask(!isEditTask);
        console.log(`Задача находится в режиме редактирования ${isEditTask}`)
    }
    return (
        // <Card className="main-container-task" sx={{ height: heightCard }}>
        <Card>
            {/* <CardContent>
                <Typography variant="h5">Заголовок</Typography>
                <Typography>Контент карточки</Typography>
            </CardContent> */}
            <Box className="task-block">
                <Box className="left-task-block">
                    <FormControlLabel
                        control={<Checkbox 
                            defaultNohecked 
                            // color="success"
                        />} 
                        checked={statusTask ? true : false}
                        onChange={handleTaskStatus}
                        sx={{ mx: 'auto' }}
                    />
                </Box>
                <Box className="middle-task-block">
                    {/* меняем класс при разворачивании задачи */}
                    <Box 
                        className={`${isOpenTask ? 'middle-task-block.expanded-text' : 'middle-task-block-text'}`}
                        onClick={handleOpenTask}
                    >
                        <Typography>Установить программное обеспечение на ПК К20-3. Настроить программы, подключить проектор к пк и веб камеру</Typography>
                        
                    </Box>
                    {/* иконки и настройки ниже самой задачи */}
                    <Box sx={{display: "flex", mr:"10px"}}>
                        {isOpenTask &&
                            <Box sx={{
                                display: repeatDaysOfWeak ? "block" : "flex",
                            }}>
                                <Box>
                                    <IconButton>
                                        <DeleteOutlineIcon></DeleteOutlineIcon>
                                    </IconButton>
                                    
                                    <IconButton>
                                        <NotificationsNoneIcon></NotificationsNoneIcon>
                                    </IconButton>
                                    {/* <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        >
                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                    </Popover> */}
                                </Box>

                                <IconButton>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* Сам значок Repeat */}
                                        <RepeatIcon />
                                        {/* Линия перечеркивания */}
                                        <Box className="crossing-out"/>
                                    </Box>
                                </IconButton>
                            </Box>
                        }
                    </Box>
                    
                    
                </Box>
                
                <Box className="right-task-block" sx={{border: "1px solid black"}}>
                    {/* две иконки рядом друг под другом(повтор и статус) */}
                    {/* <Box sx={{display: "flex", justifyContent: "space-between"}}> */}
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
                        <Box>
                            {isLearnMode ? (
                                // разные версии анимации иконки rotatePause, heartbeat, gentleSwing, softBlink, tilt
                                <IconButton className={isLearnMode ? 'gentleSwing' : 'noAnimation'}>
                                    <Filter1Icon></Filter1Icon>
                                </IconButton>
                            ) : (
                                <Box className='icon-no-button'>
                                    <Filter1Icon />
                                </Box>
                            )}

                            {!isOpenTask && 
                                <IconButton>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* Сам значок Repeat */}
                                        <RepeatIcon />

                                        {/* Линия перечеркивания */}
                                        <Box className="crossing-out"/>
                                    </Box>
                                </IconButton>
                            }
                        </Box>
                        {/* иконка редактирования, которая появляется внизу после разворачивания карточки задачи */}
                        {isEditTask ? 
                        // сделать иконку сохранения с анимацией, чтобы было видно, что измнения надо сохранть
                        //надо иконкой сохранения можно сделать иконку выхода из режима редактирования - крестик
                            (<IconButton>
                                <SaveIcon></SaveIcon>
                            </IconButton>) : (
                            
                            <IconButton
                                onClick={handleEditTask}
                            >
                                <EditIcon></EditIcon>
                            </IconButton>
                        )}

                    </Box>

                    
                </Box>
            </Box>


        </Card>
    );
}

export { CardTask }