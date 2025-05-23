import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon, TextField, Link } from "@mui/material";

function AddTask({typeTask, onAddTask}) {

    // когда создается задача, то сразу должен быть режим редактирования с вводом текста конечно!
    return(
        <Box
            sx={{
                marginTop: "10px"
            }}
        >
            <IconButton onClick={() => { onAddTask("Новая задача"); }}>
               <AddCircleOutlineIcon/>
            </IconButton>
        </Box>
    );
}

export {AddTask}