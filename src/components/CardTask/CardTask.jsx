import React, { useEffect, useState } from 'react';
import "./CardTask.css"
import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon, TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RepeatIcon from '@mui/icons-material/Repeat';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { PriorityTaskPopever } from '../PriorityTaskPopever/PriorityTaskPopever';
import { YesNoPopover } from '../YesNoPopover/YesNoPopover';
import { SelectRepeatTaskPopover } from '../SelectRepeatTaskPopover/SelectRepeatTaskPopover';
import { TimeTask } from '../TimeTask/TimeTask';
import { NoticeTaskPopover } from '../NoticeTaskPopover/NoticeTaskPopover';
import { LinkDocTask } from '../LinkDocTask/LinkDocTask';
import { OpenLinkDocTask } from '../OpenLinkDocTask/OpenLinkDocTask';


//alert ИЗМЕНЕНИИЯ НЕ СОХРАНЕНЫ, ПОВТОРИТЕ ПОЗЖЕ - если сервер после любого запроса даст отрицательный ответ
function CardTask({props}) {
    const DEFAULT_PRIORITY = 1;
    const DEFAULT_NOTICE = "not_notice"; //"before_day"
    // const isCheckBoxTaskStatusDefault = false; 
    // const [heightCard, setHeightCard] = useState(SHORT_HEIGHT); 
    const [statusTask, setStatusTask] = useState(false);
    const [priorityTask, setPriorityTask] = useState(DEFAULT_PRIORITY); 
    const [isOpenTask, setIsOpenTask] = useState(true); 
    const [isEditTask, setIsEditTask] = useState(false);
    const [isRepeatTask, setIsRepeatTask] = useState(true); 
    const [repeatDaysOfWeak, setRepeatDaysOfWeak] = useState(false); //при повторе по дням недели значек переносится вниз и указывадются дни недели рядом для повтора 
    const [textTask, setTextTask] = useState('Задача..');
    //получим с сервера данные
    const [timeStart, setTimeStart] = useState('Fri, 09 May 2025 17:00:00 GMT');
    const [timeEnd, setTimeEnd] = useState('Fri, 09 May 2025 17:00:00 GMT');
    const [noticeTask, setNoticeTask] = useState(DEFAULT_NOTICE); 
    const [linkDoc, setLinkDoc] = useState("");
    const [openLinkProgram, setOpenLinkProgram] = useState(false);
    const handleTaskStatus = () => { //при клике меняем статус
        setStatusTask((prevStatus) => !prevStatus); 
        //console.log(`Статус таски: ${statusTask}`);
    }
    const handleChangeText = (event) =>{
        setTextTask(event.target.value);
        //console.log(event.target.value);
    }
   
    const handleOpenTask = () => { 
        if(!isEditTask){
            setIsOpenTask((prevState) => {
                const newState = !prevState;
                // setHeightCard(newState ? FULL_HEIGHT : SHORT_HEIGHT);
                //console.log(`Задача развернута ${isOpenTask}`);
                return newState;
            });
        }  
    }
    const handleEditTask = () => {
        setIsEditTask(!isEditTask);
        //закрыть режим обучения, если открыть режим редактирования!!!!
        //console.log(`Задача находится в режиме редактирования ${isEditTask}`)
    }
    
    const handleDeleteTask = () => {
        //выполним удаление задачи, например deleteTask(idTask) где id Будет взять из пропсов
        console.log("Удаляем задачу");
    }
    
    return (
        // <Card className="main-container-task" sx={{ height: heightCard }}>
        <div sx={{ 
            width: '95vw', /* На всю ширину viewport */
            marginLeft: '-16px', /* Компенсируем padding родителя */
            marginRight: '-16px',
            borderRadius: 0 /* Убираем скругления */
          }}>
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
                <Box className="middle-task-block" sx={{ width: '100%' }}>
                    {/* меняем класс при разворачивании задачи */}
                    <Box 
                        className={`${isOpenTask ? 'middle-task-block.expanded-text' : 'middle-task-block-text'}`}
                        onClick={handleOpenTask}
                    >
                        {/* вот тут надо знать режим редактирования или нет isEditTask={isEditTask} чтобы отображать окно с текстом и клавиатурой ввода */}
                        
                        {isEditTask ? (
                            <TextField
                                id="outlined-multiline-static"
                                label="Режим редактирования"
                                multiline
                                rows={4}
                                placeholder='Задача..'
                                defaultValue={textTask}
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '8px',
                                        marginTop: '8px',
                
                                    },
                                    marginTop: '8px',
                                    width: '100%',
                                    mx: 0, // Убираем горизонтальные margin
                                    px: 0  // Убираем горизонтальные padding
                                }}
                                onChange={handleChangeText}
                            />
                        ):(
                            <Typography>{textTask}</Typography>
                            // <Typography>Установить программное обеспечение на ПК К20-3. Настроить программы, подключить проектор к пк и веб камеру</Typography>
                        )}
                        
                    </Box>

                    <TimeTask 
                        timeStart={timeStart} setTimeStart={setTimeStart}
                        timeEnd={timeEnd} setTimeEnd={setTimeEnd}
                    ></TimeTask>
                    <LinkDocTask 
                        linkDoc={linkDoc} setLinkDoc={setLinkDoc} 
                        openLinkProgram={openLinkProgram} setOpenLinkProgram={setOpenLinkProgram}
                    ></LinkDocTask>
                    <Box 
                        sx={{ display: "flex", mr: "10px" }} 
                        className={isOpenTask ? "panel-task-settings" : ""}
                    >
                        {isOpenTask &&
                            <Box sx={{
                                    display: repeatDaysOfWeak ? "block" : "flex",
                                }}
                            >
                                <Box >
                                    {/* <IconButton>
                                        <DeleteOutlineIcon></DeleteOutlineIcon>
                                    </IconButton> */}
                                    <YesNoPopover question="Удалить задачу" onConfirm={handleDeleteTask}/>
 
                                    <NoticeTaskPopover noticeTask={noticeTask} setNoticeTask={setNoticeTask}></NoticeTaskPopover>
                                    {/* <IconButton>
                                        <NotificationsNoneIcon></NotificationsNoneIcon>
                                    </IconButton> */}
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
                                            {/* <RepeatIcon /> */}
                                            <SelectRepeatTaskPopover />
                                            {/* Линия перечеркивания */}
                                            <Box className="crossing-out"/>
                                        </Box>
                                    </IconButton>
                                    <OpenLinkDocTask openLinkProgram={openLinkProgram} setOpenLinkProgram={setOpenLinkProgram}></OpenLinkDocTask>    
                                    
                                </Box>

                                
                            </Box>
                        }
                    </Box>
                    
                    
                </Box>
                
                <Box className="right-task-block"> 
                {/* sx={{border: "1px solid black"}} */}
                    {/* две иконки рядом друг под другом(повтор и статус) */}
                    {/* <Box sx={{display: "flex", justifyContent: "space-between"}}> */}
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
                        <Box>                       
                            {/* ИКОНКА ДЛЯ ВЫБОРА СТАТУСА ЗАДАЧИ КАК ОТДЕЛЬНЫЙ КОМПОНЕНТ */}
                            {/* одновременно isEditMode и isLearnMode в true не могут быть */}
                            <PriorityTaskPopever 
                                priorityTask={priorityTask} 
                                setPriorityTask = {setPriorityTask}
                            />
                            {!isOpenTask && 
                                // <IconButton>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {/* Сам значок Repeat */}
                                        {/* <RepeatIcon /> */}
                                        <SelectRepeatTaskPopover />
                                        {/* Линия перечеркивания */}
                                        <Box className="crossing-out"/>
                                    </Box>
                                // </IconButton>
                            }
                        </Box>
                        {/* иконка редактирования, которая появляется внизу после разворачивания карточки задачи */}
  
                        
                        <Box>
                            {isOpenTask && ( //редактировать текст можно при развернутой задачи
                                isEditTask ? (
                                // сделать иконку сохранения с анимацией, чтобы было видно, что измнения надо сохранть
                                //надо иконкой сохранения можно сделать иконку выхода из режима редактирования - крестик
                                <IconButton onClick={handleEditTask}>
                                    {/* Можно добавить анимацию через CSS или Framer Motion */}
                                    <SaveIcon className='rotatePause'/>
                                </IconButton>
                                ) : (
                                <IconButton onClick={handleEditTask}>
                                    <EditIcon />
                                </IconButton>
                                )
                            )}
                        </Box>
                        

                    </Box>

                    
                </Box>
            </Box>


        </div>
    );
}

export { CardTask }