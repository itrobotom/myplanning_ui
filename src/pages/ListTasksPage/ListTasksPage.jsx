import { tasks as mockTasks } from '../../data/data'; // Импорт моковых данных
import { CardTask } from "../../components/CardTask/CardTask";
import { GroupIconsFooter } from "../../components/FooterListTasks/GroupeIconsFooter/GroupeIconsFooter";
import { Box } from "@mui/material";
import { GroupIconsHeader } from "../../components/HeaderListTasks/GroupIconsHeader/GroupIconsHeader";
import React, { useEffect, useState } from 'react';

function ListTaskPage() {
    const [tasks, setTasks] = useState([]); //задачи получаются из локалстораджа
    const [filterTask, setFilterTask] = useState('all');
    const [currentDate, setCurrentDate] = useState(new Date()); //текущая дата для оценки просрочкна задача или нет

    const handleUpdateTask = () => {
        console.log("запущено обновение таски");
    }

    const handleDeleteTask = () => {
        console.log("запущена функция удаления таски");
    }

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
                
                {/* пока выведу одну задачу */}
                {/* <CardTask 
                    task={mockTasks[0]}
                    currentDate={currentDate}
                    onUpdateTask={handleUpdateTask}
                    onDeleteTask={handleDeleteTask}
                /> */}
                {/* список задач будет через мап */}
                {mockTasks.map((task) => (
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
                <GroupIconsFooter />
            </Box>
        </Box>
    );
}

export { ListTaskPage };