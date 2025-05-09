import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon, TextField, Link } from "@mui/material";

function AddTask({typeTask}) {

    // когда создается задача, то сразу должен быть режим редактирования с вводом текста конечно!
    return(
        <>
            <IconButton>
                <AddCircleOutlineIcon
                    sx={{  }}
                ></AddCircleOutlineIcon>
            </IconButton>
        </>
    );
}

export {AddTask}