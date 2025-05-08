import { Card, CardMedia,  CardActionArea, Typography, Box, IconButton, CardContent, Icon, TextField, Link } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

function LinkDocTask({linkDoc, setLinkDoc, openLinkProgram, setOpenLinkProgram}) {
    const handleLinkDocChange = (event) => {
        setLinkDoc(event.target.value);
        //console.log(`Введенная ссылка на приложения ${event.target.value}`);  
    }
    const handleInput = () => {
        setOpenLinkProgram(prev => !prev);
    }

    const clearLink = () => {
        setLinkDoc("");
        setOpenLinkProgram(prev => !prev);
    }
    return(
        <Box sx={{ 
            display: "flex", 
            // justifyContent: "space-between",
            // alignItems: "center",
            gap: 1,
            px: 1,
            py: 0.5
        }}>
            {openLinkProgram ? (
                <Box sx={{ 
                    display: "flex", 
                    justifyContent: "space-between",
                    // alignItems: "center",
                    gap: 1,
                    px: 1,
                    py: 0.5
                }}>
                    {/* <Typography gutterBottom>
                        Гиперссылка на приложения
                    </Typography> */}
                    <IconButton onClick={clearLink}>
                        <ClearIcon ></ClearIcon>
                    </IconButton>
                    <TextField
                        id="linkProgramm"
                        label="Вставьте ссылку"
                        value={linkDoc}
                        onChange={handleLinkDocChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <IconButton onClick={handleInput}>
                        <SendIcon ></SendIcon>
                    </IconButton>
                </Box>
            ) : (
                ((linkDoc !== "") &&
                <>
                    {/* <LinkIcon></LinkIcon>    */}
                    <Link 
                        href={linkDoc} 
                        target="_blank"
                        underline="hover"
                    >
                        <Typography gutterBottom> Приложения </Typography>
                    </Link>
                </>
                )
            )}                   
        </Box>
    )
}

export {LinkDocTask}