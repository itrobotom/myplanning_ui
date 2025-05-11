import { tasks as mockTasks } from '../../data/data'; // Импорт моковых данных
import { CardTask } from "../../components/CardTask/CardTask";
import { GroupIconsFooter } from "../../components/FooterListTasks/GroupeIconsFooter/GroupeIconsFooter";
import { Box } from "@mui/material";
import { GroupIconsHeader } from "../../components/HeaderListTasks/GroupIconsHeader/GroupIconsHeader";
import React, { useEffect, useState } from 'react';

function ListTaskPage() {
    const [tasks, setTasks] = useState([]); //задачи получаются из локалстораджа
    const [filterTask, setFilterTask] = useState('all');
    const [isInitialized, setIsInitialized] = useState(false); //при вервом запуске задач нет, значит не инициализировано
    const [currentDate, setCurrentDate] = useState(new Date()); //текущая дата для оценки просрочкна задача или нет


    // Инициализация задач
    useEffect(() => {
        if (!isInitialized) {
            const storedTasks = localStorage.getItem('tasks'); //получили задачи из локалстораджа
            setTasks(storedTasks ? JSON.parse(storedTasks) : [...mockTasks]);
            setIsInitialized(true);
        }
    }, [isInitialized]);

    const handleUpdateTask = (updatedTask) => {
        const newTasks = tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const handleDeleteTask = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const handleAddTask = (newTaskContent) => {
        const newTask = {
            id: `task_${Date.now()}`,
            user_id: "66614df5966ed02f7a77de9c",
            task_type: "personal",
            repeat: "noRepeat",
            time_start: new Date().toISOString(),
            time_end: new Date(Date.now() + 86400000).toISOString(),
            time_end_actual: null,
            content: newTaskContent,
            priority: 2,
            status: "in_process",
            notifications: {
                channels: ["telegram"],
                schedule: ["1_day_before"]
            },
            linkDoc: "",
            linkChat: ""
        };

        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const handleResetTasks = () => {
        if (window.confirm('Сбросить все задачи к исходным?')) {
            localStorage.setItem('tasks', JSON.stringify(mockTasks));
            setTasks([...mockTasks]);
        }
    };

    const filteredTasks = filterTask === 'all' 
        ? tasks 
        : tasks.filter(task => task.task_type === filterTask);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "93vh",
                width: "100%",
                overflow: "hidden",
            }}
        >
            {/* Шапка с фильтрами */}
            <Box sx={{ 
                flexShrink: 0,
                position: 'sticky',
                top: 0,
                zIndex: 1,
                backgroundColor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}>
                <GroupIconsHeader 
                    currentFilter={filterTask}
                    onFilterChange={setFilterTask}
                    onResetTasks={handleResetTasks}
                />
            </Box>

            {/* Основное содержимое со скроллом */}
            <Box sx={{ 
                flex: 1,
                overflowY: 'auto',
                p: 2,
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#888',
                    borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                }
            }}>
                {filteredTasks.map(task => (
                    <Box key={task.id} sx={{ mb: 2 }}>
                        <CardTask 
                            task={task}
                            currentDate={currentDate}
                            onUpdateTask={handleUpdateTask}
                            onDeleteTask={handleDeleteTask}
                        />
                    </Box>
                ))}
            </Box>

            {/* Футер (фиксированный внизу) */}
            <Box sx={{ 
                flexShrink: 0,
                position: 'sticky',
                bottom: 0,
                zIndex: 1,
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider'
            }}>
                <GroupIconsFooter onAddTask={handleAddTask} />
            </Box>
        </Box>
    );
}

export { ListTaskPage };