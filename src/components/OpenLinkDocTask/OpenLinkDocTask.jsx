import AddLinkIcon from '@mui/icons-material/AddLink';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import LinkIcon from '@mui/icons-material/Link';
import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon, TextField, Link } from "@mui/material";

function OpenLinkDocTask({openLinkProgram, setOpenLinkProgram}){
    const handleOpen = () => {
        setOpenLinkProgram(prev => !prev);
    }
    return(
        <IconButton onClick={handleOpen}>
            <LinkIcon></LinkIcon>   
        </IconButton>
    )
}

export {OpenLinkDocTask}