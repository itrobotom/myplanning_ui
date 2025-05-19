import { AddTask } from "../AddTask/AddTask";
import { TypeTasks } from "../TypeTasks/TypeTasks";
import { FilterListTask } from "../FilterTimeTask/FilterListTask";
import React, { useEffect, useState } from 'react';
import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon, TextField, Link } from "@mui/material";


function GroupIconsFooter({onAddTask}) {
    const tasks = ['сегодня', 'неделя', 'завершенные', 'просроченные', 'будущие', 'все'];
    const [selectedTask, setSelectedTask] = useState(tasks[0]); // Дефолтное значение
    return(
        <Box 
            sx={{display: "flex",  
                justifyContent: "space-between", 
                height: "100%",
                padding: "10px",
                width: '95%',
                mx: "auto"
            }}
        >
            <FilterListTask></FilterListTask>
            <TypeTasks
                options={tasks}
                value={selectedTask}
                onChange={setSelectedTask}
            />
            <AddTask onAddTask={onAddTask}></AddTask>

        </Box>
    );
}

export {GroupIconsFooter}