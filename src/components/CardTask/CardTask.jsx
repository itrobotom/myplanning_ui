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

//пометка для групповой задачи
import GroupsIcon from '@mui/icons-material/Groups';

//пометка, кто автор задачи
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';

// ракета 
import RocketIcon from '@mui/icons-material/Rocket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

//смайлы лица (есть все)
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

//палец вверх
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


function CardTask({props}) {
    //если развернутая карточка задачи, то она выше
    const heightCard = 400;
    //вытащим данные из стора по isCheckBoxTaskStatus, таким и будет далее стейт
    //а пока сделаем его просто по дефолту false
    const isLearn = true; //режим обучения (включается возможность кликать по всем иконкам, получая подсказки)
    const isFullTask = false; //все задачи в ленте свернуты, чтобы развернуть и увидеть все настройки и все содержимое, возомжность редактироват, надо нажать на саму задачу
    const isCheckBoxTaskStatusDefault = false; 
    const [statusTask, setStatusTask] = useState(isCheckBoxTaskStatusDefault);
    const handleTaskStatus = () => { //при клике меняем статус
        setStatusTask(!statusTask);
        // if(statusTask){
        //     setStatusTask(false);
        //     //также запишем это в стор
        // } else {
        //     setStatusTask(true); 
        // }
        console.log(statusTask);
    }
    return (
        <Card sx={{width: 1200, height: heightCard, p: '20px' }}>
            {/* <CardContent>
                <Typography variant="h5">Заголовок</Typography>
                <Typography>Контент карточки</Typography>
            </CardContent> */}
            <Box sx={{padding: 2, backgroundColor: 'lightblue', display: 'flex'}}>
                <Box sx={{border: "1px solid black"}}>
                    <FormControlLabel
                        control={<Checkbox 
                            defaultNohecked 
                            // color="success"
                        />} 
                        checked={statusTask ? true : false}
                        onChange={handleTaskStatus}
                    />
                </Box>
                <Box>
                    <Box sx={{border: "1px solid black", width:"200px", display: 'flex', alignItems: "center", pl:"10px", pr:"10px"}}>
                        <Typography>Установить программное обеспечение на ПК К20-3. Настроить программы, подключить проектор к пк и веб камеру</Typography>
                    </Box>
                    {/* иконки и настройки ниже самой задачи */}
                    <Box sx={{display: "flex", mr:"10px"}}>
                        <IconButton>
                            <DeleteOutlineIcon></DeleteOutlineIcon>
                        </IconButton>
                        <IconButton>
                            <NotificationsNoneIcon></NotificationsNoneIcon>
                        </IconButton>
                        
                        {isFullTask & 
                            <IconButton>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    /* Сам значок Repeat */
                                    <RepeatIcon />
                                    /* Линия перечеркивания */
                                    <Box className="crossing-out"/>
        
                                </Box>
                            </IconButton>
                        }
                        
                    </Box>
                </Box>
                
                <Box sx={{border: "1px solid black"}}>
                    {/* две иконки рядом (повтор и статус) */}
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
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

         
                        {isLearn ? (
                            <IconButton className={isLearn ? 'rotatePause' : 'noAnimation'}>
                                <Filter1Icon></Filter1Icon>
                            </IconButton>
                        ) : (
                            <Box className='icon-no-button'>
                                <Filter1Icon />
                            </Box>
                        )}

                    </Box>
                    {/* иконка редактирования, которая появляется внизу после разворачивания карточки задачи */}
                    <IconButton>
                        <EditIcon></EditIcon>
                    </IconButton>
                    {/* <IconButton>
                        <SaveIcon></SaveIcon>
                    </IconButton> */}
                </Box>
            </Box>


        </Card>
    );
}

export { CardTask }