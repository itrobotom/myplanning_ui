import React, { useEffect, useState } from 'react';

import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
                <Box>
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
                    <Typography>Установить программное обеспечение на ПК К20-3</Typography>
                </Box>
                <Box>
                    <IconButton>
                        <StarIcon></StarIcon>
                    </IconButton>
                </Box>
            </Box>

        </Card>
    );
}

export { CardTask }