import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';
import React, { useEffect, useState } from 'react';

const typeFilter = {
  PERSONAL: "personal",
  WORK: "work",
  GROUP: "group",
  HABITS: "habits",
  FAMILY: "family",
  ALL: "all",
};

const TYPE_OPTIONS = [
  { value: typeFilter.PERSONAL, label: "личные" },
  { value: typeFilter.WORK, label: "рабочие" },
  { value: typeFilter.GROUP, label: "групповые" },
  { value: typeFilter.HABITS, label: "привычки" },
  { value: typeFilter.FAMILY, label: "семья" },
  { value: typeFilter.ALL, label: "все" },
];

function TypeTasks () {
  const [selectedValue, setSelectedValue] = useState(TYPE_OPTIONS[0]);

  return (
    <Autocomplete
      options={TYPE_OPTIONS}
      getOptionLabel={(option) => option.label}
      value={selectedValue}
      onChange={(event, newValue) => {
        if (newValue) {
          setSelectedValue(newValue);
          console.log('Выбрано:', newValue.value);
        }
      }}
      disableClearable //если надо рядом крестик убрать выбранный пункт disablePortal
      renderInput={(params) => (
        <TextField
          {...params}
          label="Тип задачи"
          variant="outlined"
          sx={{
            width: '100%',
            minWidth: '200px',
            maxWidth: '250px',
            '& .MuiAutocomplete-input': {
              cursor: 'pointer',
            },
          }}
        />
      )}
      // {...props}
    />
  );
};

export { TypeTasks, typeFilter, TYPE_OPTIONS };