//передаем через пропсы текст вопроса, адрес запроса на сервер
import { Button, Popover, Typography, IconButton } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from "react";

function YesNoPopover ({
    onConfirm,
    question
}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null);
    }
    const handleYes = () => {
        onConfirm(); //вызываем функцию удаления в родителе через onConfirm
        handleClose();
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <DeleteOutlineIcon></DeleteOutlineIcon>
            </IconButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>{question}</Typography>
                <Button onClick={handleYes} color="primary">Да</Button>
                <Button onClick={handleClose} color="secondary">Нет</Button>
            </Popover>
        </>
        
    );
};

export {YesNoPopover}