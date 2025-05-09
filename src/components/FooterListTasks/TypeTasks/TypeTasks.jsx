import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';

const TypeTasks = ({ options, value, onChange, ...props }) => {
  const CustomPopper = (props) => {
    return (
      <Popper
        {...props}
        placement="top-start"
        modifiers={[
          {
            name: 'flip',
            enabled: false,
          },
        ]}
      />
    );
  };

  return (
    <Autocomplete
      options={options}
      value={value !== null ? value : options[0]} // Дефолтное значение (первый вариант)
      onChange={(event, newValue) => {
        if (onChange) onChange(newValue);
      }}
      disableClearable={true} // Отключает возможность очистки
      clearIcon={null} // Убирает крестик (можно не ставить, если disableClearable=true)
      PopperComponent={CustomPopper}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            width: '43%', // Занимает 33% от родителя
            minWidth: '200px', // Минимальная ширина (опционально)
          }}
        />
      )}
      {...props}
    />
  );
};

export { TypeTasks };