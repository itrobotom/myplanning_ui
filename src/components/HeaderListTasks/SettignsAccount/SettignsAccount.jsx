import React from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { tasks as mockTasks } from '../../../data/data';

function SettingsAccount() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        window.location.href = '/';
    };

    const handleResetTasks = () => {
        if (window.confirm('Вы уверены, что хотите сбросить все задачи к исходным? Все ваши изменения будут потеряны.')) {
            localStorage.setItem('tasks', JSON.stringify(mockTasks));
            window.dispatchEvent(new Event('storage')); // Триггерим событие для обновления других компонентов
            handleClose();
        }
    };

    return (
        <>
            <IconButton 
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <PersonIcon />
            </IconButton>
            
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleResetTasks}>
                    <Typography variant="body2">Сбросить все задачи</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography variant="body2">Настройки аккаунта</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography variant="body2">Выйти</Typography>
                </MenuItem>
            </Menu>
        </>
    );
}

export { SettingsAccount };