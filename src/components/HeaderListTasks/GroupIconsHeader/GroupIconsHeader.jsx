import React from 'react';

import { SettingsAccount } from '../SettignsAccount/SettignsAccount';
import { SearchTask } from '../SearchTask/SearchTask';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { AppBar, Toolbar, Button, Popover, Typography, IconButton, FormControl, FormLabel, RadioGroup, Radio, Checkbox, FormControlLabel } from "@mui/material";

function GroupIconsHeader() {
    return (
        <AppBar 
          position="sticky" // Прилипает к верху
          sx={{ 
            backgroundColor: 'white', 
            color: 'black', 
            boxShadow: 'none', 
            borderBottom: '1px solid #e0e0e0',
            pb: 1,
            mb: 1 
          }}
        >
          <Toolbar sx={{ 
            display: 'flex',
            justifyContent: 'space-between', // Распределяет элементы по краям
            width: '95%', // Занимает всю доступную ширину
            //px: 2, // Добавляет горизонтальный padding для отступов от краев
            pl: 0,
            mt: 1,
            mx: "auto"
          }}>
                <IconButton>
                    <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
                </IconButton>
                <SearchTask></SearchTask>
                <SettingsAccount></SettingsAccount>
          </Toolbar>
        </AppBar>
    );
}

export {GroupIconsHeader}