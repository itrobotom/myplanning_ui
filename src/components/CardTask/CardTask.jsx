import React, { useEffect, useState } from 'react';

import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RepeatIcon from '@mui/icons-material/Repeat';

function CardTask({props}) {
    //если развернутая карточка задачи, то она выше
    const heightCard = 400;
    //вытащим данные из стора по isCheckBoxTaskStatus, таким и будет далее стейт
    //а пока сделаем его просто по дефолту false
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
                                <Box
                                    sx={{
                                    position: 'absolute',
                                    width: '120%',
                                    height: '2px',
                                    backgroundColor: 'currentColor',
                                    top: '50%',
                                    transform: 'translateY(-50%) rotate(-45deg)',
                                    }}
                                />
                            </Box>
                        </IconButton>
                        
                        <IconButton>
                            <StarIcon></StarIcon>
                        </IconButton>

                    </Box>
                    {/* иконка редактирования, которая появляется внизу после разворачивания карточки задачи */}
                    <IconButton>
                        <StarIcon></StarIcon>
                    </IconButton>
                </Box>
            </Box>


        </Card>
    );
}

export { CardTask }