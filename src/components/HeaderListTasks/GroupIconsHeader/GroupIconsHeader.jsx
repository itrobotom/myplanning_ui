import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

import { SettignsAccount } from '../SettignsAccount/SettignsAccount';
import { SearchTask } from '../SearchTask/SearchTask';

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
            width: '100%', // Занимает всю доступную ширину
            //px: 2, // Добавляет горизонтальный padding для отступов от краев
            pl: 0
          }}>
                <SearchTask></SearchTask>
                <SettignsAccount></SettignsAccount>
          </Toolbar>
        </AppBar>
    );
}

export {GroupIconsHeader}