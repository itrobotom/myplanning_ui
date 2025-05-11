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
function CardTask({ task, onUpdateTask, onDeleteTask, currentDate }) {
    const DEFAULT_PRIORITY = 1;
    const DEFAULT_NOTICE = "not_notice";
    
    // Состояния компонента
    const [statusTask, setStatusTask] = useState(task.status === "completed");
    const [priorityTask, setPriorityTask] = useState(task.priority || DEFAULT_PRIORITY); 
    const [isOpenTask, setIsOpenTask] = useState(false); 
    const [isEditTask, setIsEditTask] = useState(false);
    const [isRepeatTask, setIsRepeatTask] = useState(task.repeat === "noRepeat"); 
    const [repeatDaysOfWeak, setRepeatDaysOfWeak] = useState(task.days_of_week?.length > 0); 
    const [textTask, setTextTask] = useState(task.content);
    const [timeStart, setTimeStart] = useState(task.time_start);
    const [timeEnd, setTimeEnd] = useState(task.time_end);
    const [noticeTask, setNoticeTask] = useState(task.notifications?.schedule[0] || DEFAULT_NOTICE); 
    const [linkDoc, setLinkDoc] = useState(task.linkDoc || "");
    const [openLinkProgram, setOpenLinkProgram] = useState(false);

    // Определяем статус задачи для стилей
    const getTaskStyleBgc = () => {
        const endDate = new Date(task.time_end);
        const isOverdue = endDate < currentDate && task.status === 'in_process';
        const isCompleted = task.status === 'completed';
        
        if (isOverdue) {
            return {
                background: 'linear-gradient(to bottom right, #fdecea, #f8d7da)',
                borderLeft: '4px solid #dc3545'
            };
        }
        
        if (isCompleted) {
            return {
                background: 'linear-gradient(to bottom right, #e6f4ea, #c8e6c9)',
                borderLeft: '4px solid #28a745'
            };
        }
        
        return {
            background: 'linear-gradient(to bottom right, #e3f2fd, #d1ecf1)',
            borderLeft: '4px solid #17a2b8'
        };
    };
    // Обработчики событий
    const handleTaskStatus = () => {
        const newStatus = !statusTask;
        setStatusTask(newStatus);
        onUpdateTask({
            ...task,
            status: newStatus ? "completed" : "in_process",
            time_end_actual: newStatus ? new Date().toISOString() : null
        });
    };

    const handleChangeText = (event) => {
        setTextTask(event.target.value);
    };
   
    const handleOpenTask = () => { 
        if(!isEditTask){
            setIsOpenTask(prev => !prev);
        }  
    };

    const handleEditTask = () => {
        if(isEditTask) {
            // Сохраняем изменения при выходе из режима редактирования
            const updatedTask = {
                ...task,
                content: textTask,
                priority: priorityTask,
                time_start: timeStart,
                time_end: timeEnd,
                notifications: {
                    ...task.notifications,
                    schedule: [noticeTask]
                },
                linkDoc: linkDoc
            };
            onUpdateTask(updatedTask);
        }
        setIsEditTask(!isEditTask);
    };
    
    const handleDeleteTask = () => {
        onDeleteTask(task.id);
    };

    // Эффект для обновления состояния при изменении пропсов
    useEffect(() => {
        setStatusTask(task.status === "completed");
        setPriorityTask(task.priority || DEFAULT_PRIORITY);
        setTextTask(task.content);
        setTimeStart(task.time_start);
        setTimeEnd(task.time_end);
        setNoticeTask(task.notifications?.schedule[0] || DEFAULT_NOTICE);
        setLinkDoc(task.linkDoc || "");
    }, [task]);

    return (
        <div sx={{ 
            width: '95vw',
            marginLeft: '-16px',
            marginRight: '-16px',
            borderRadius: 0
          }}>
            <Box 
                className="task-block"
                sx={{
                    overflow: 'hidden',
                    ...getTaskStyleBgc(), // Применяем стили в зависимости от статуса
                }}
            >
                <Box className="left-task-block">
                    <FormControlLabel
                        control={<Checkbox />} 
                        checked={statusTask}
                        onChange={handleTaskStatus}
                        sx={{ mx: 'auto' }}
                    />
                </Box>
                
                <Box className="middle-task-block" sx={{ width: '100%' }}>
                    <Box 
                        className={`${isOpenTask ? 'middle-task-block.expanded-text' : 'middle-task-block-text'}`}
                        onClick={handleOpenTask}
                    >
                        {isEditTask ? (
                            <TextField
                                id="outlined-multiline-static"
                                label="Режим редактирования"
                                multiline
                                rows={4}
                                placeholder='Задача..'
                                value={textTask}
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: '8px',
                                        marginTop: '8px',
                                    },
                                    marginTop: '8px',
                                    width: '100%',
                                    mx: 0,
                                    px: 0
                                }}
                                onChange={handleChangeText}
                            />
                        ):(
                            <Typography>{textTask}</Typography>
                        )}
                    </Box>

                    <TimeTask 
                        timeStart={timeStart} 
                        setTimeStart={setTimeStart}
                        timeEnd={timeEnd} 
                        setTimeEnd={setTimeEnd}
                        isEditMode={isEditTask}
                    />
                    
                    {isOpenTask && (
                        <LinkDocTask 
                            linkDoc={linkDoc} 
                            setLinkDoc={setLinkDoc} 
                            openLinkProgram={openLinkProgram} 
                            setOpenLinkProgram={setOpenLinkProgram}
                            isEditMode={isEditTask}
                        />
                    )}
                    
                    {isOpenTask && (
                        <Box sx={{ display: "flex", mr: "10px" }} className="panel-task-settings">
                            <Box sx={{ display: repeatDaysOfWeak ? "block" : "flex" }}>
                                <YesNoPopover 
                                    question="Удалить задачу" 
                                    onConfirm={handleDeleteTask}
                                />
                                <NoticeTaskPopover 
                                    noticeTask={noticeTask} 
                                    setNoticeTask={setNoticeTask}
                                    isEditMode={isEditTask}
                                />
                                {/* <SelectRepeatTaskPopover 
                                    isRepeat={isRepeatTask}
                                    setIsRepeat={setIsRepeatTask}
                                    isEditMode={isEditTask}
                                /> */}
                                {!isRepeatTask ? (
                                    <SelectRepeatTaskPopover 
                                        isRepeat={isRepeatTask}
                                        setIsRepeat={setIsRepeatTask}
                                        isEditMode={isEditTask}
                                    />
                                ) : (
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
                                        <SelectRepeatTaskPopover 
                                            isRepeat={isRepeatTask}
                                            setIsRepeat={setIsRepeatTask}
                                            isEditMode={isEditTask}
                                        />
                                        {/* Линия перечеркивания */}
                                        <Box className="crossing-out"/>
                                    </Box>
                                )}
                                
                                <OpenLinkDocTask 
                                    openLinkProgram={openLinkProgram} 
                                    setOpenLinkProgram={setOpenLinkProgram}
                                />    
                            </Box>
                        </Box>
                    )}
                </Box>
                
                <Box className="right-task-block">
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                        <Box>                       
                            <PriorityTaskPopever 
                                priorityTask={priorityTask} 
                                setPriorityTask={setPriorityTask}
                                isEditMode={isEditTask}
                            />
                            {!isOpenTask && (
                                !isRepeatTask ? (
                                    <SelectRepeatTaskPopover 
                                        isRepeat={isRepeatTask}
                                        setIsRepeat={setIsRepeatTask}
                                        isEditMode={isEditTask}
                                    />
                                ) : (
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
                                        <SelectRepeatTaskPopover 
                                            isRepeat={isRepeatTask}
                                            setIsRepeat={setIsRepeatTask}
                                            isEditMode={isEditTask}
                                        />
                                        {/* Линия перечеркивания */}
                                        <Box className="crossing-out"/>
                                    </Box>
                                )
                            )}
                        </Box>
                        
                        <Box>
                            {isOpenTask && (
                                isEditTask ? (
                                    <IconButton onClick={handleEditTask}>
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

export { CardTask };