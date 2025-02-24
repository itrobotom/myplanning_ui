import React, { useEffect, useState } from 'react';
import "./CardTask.css"
import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RepeatIcon from '@mui/icons-material/Repeat';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { PriorityTask } from '../PriorityTask/PriorityTask';
import { YesNoPopover } from '../YesNoPopover/YesNoPopover';

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
    const [priorityTask, setPriorityTask] = useState(1); 
    const [isOpenTask, setIsOpenTask] = useState(true); 
    const [isEditTask, setIsEditTask] = useState(true);
    const [isLearnMode, setIsLearnMode] = useState(true); //режим обучения (включается возможность кликать по всем иконкам, получая подсказки)
    const [isRepeatTask, setIsRepeatTask] = useState(true); 
    const [repeatDaysOfWeak, setRepeatDaysOfWeak] = useState(false); //при повторе по дням недели значек переносится вниз и указывадются дни недели рядом для повтора 
    const handleTaskStatus = () => { //при клике меняем статус
        setStatusTask((prevStatus) => !prevStatus); //ИСПРАВИТЬ СМЕНУ СОСТОЯНИЕ С ПРЕДЫДУЩЕМ PREV!!!!!!!!!!!!!!!!!!!!!!!!
        console.log(`Статус таски: ${statusTask}`);
    }
    const handlePriorityTask = (priorityId) => {
        switch(priorityId){
            case "priority1":
                setPriorityTask(1);
                break;
            case "priority2":
                setPriorityTask(2);
                break;
            case "priority3":
                setPriorityTask(3);
                break;
        }
        console.log(priorityTask);
            
    }
    const handleOpenTask = () => { 
        setIsOpenTask((prevState) => {
            const newState = !prevState;
            setHeightCard(newState ? FULL_HEIGHT : SHORT_HEIGHT);
            console.log(`Задача развернута ${isOpenTask}`);
            return newState;
        });
    }
    const handleEditTask = () => {
        setIsEditTask(!isEditTask);
        //закрыть режим обучения, если открыть режим редактирования!!!!
        console.log(`Задача находится в режиме редактирования ${isEditTask}`)
    }
    const handleLearnMode = () => {
        setIsLearnMode(!isLearnMode);
        //нельзя зайти в режим обучения, если включен режим редактирования
        //сделать кнопку обучения в меню не активной 
        //в справке об этом написать!!!!!!
    }
    const handleDeleteTask = () => {
        //выполним удаление задачи, например deleteTask(idTask) где id Будет взять из пропсов
        console.log("Удаляем задачу");
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
                                    {/* <IconButton>
                                        <DeleteOutlineIcon></DeleteOutlineIcon>
                                    </IconButton> */}
                                    <YesNoPopover question="Удалить задачу" onConfirm={handleDeleteTask}/>
                                    
                                    <IconButton>
                                        <NotificationsNoneIcon></NotificationsNoneIcon>
                                    </IconButton>
                                    
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
                            {/* ИКОНКА ДЛЯ ВЫБОРА СТАТУСА ЗАДАЧИ КАК ОТДЕЛЬНЫЙ КОМПОНЕНТ */}
                            {/* одновременно isEditMode и isLearnMode в true не могут быть */}
                            <PriorityTask 
                                isEditTask={isEditTask} 
                                isLearnMode={isLearnMode} 
                                priorityTask={priorityTask} 
                                handlePriorityTask = {handlePriorityTask}
                            />
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