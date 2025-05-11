// {
//   "user_id": "66614df5966ed02f7a77de9c",
//   "task_type": "personal", //"personal", "work", "group", "habits", "family","all",
//   //"period": "in_day", //убрал
//   "repeat": "noRepeat", //"noRepeat", "everyday", "everyWeek", "everyMonth", "everyYear", "chooseDays"
//   //"days_of_week": ["Monday", "Wednesday", "Friday"], //убрал пока
//   "start_date": "2025-01-20T00:00:00.000Z",
//   "planned_end_date": "2025-01-20T00:00:00.000Z",
//   "actual_end_date": "2025-01-19T00:00:00.000Z",
//   //"next_planned_date": "2025-01-22T00:00:00.000Z", убрал пока, нужно для регулярных задач
//   //"execution_days": 7, //что это
//   "content": "Complete daily workout",
//   //"category": "health", //убрал
//   //"planned_time": 60, //убрал 
//   //"actual_time": 50,  //убрал
//   "priority": 2, //1, 2, 3 высокий низ средн
//   "status": "completed", //"in_process"
//   //"completed_in_time": true, //временно убрал, нужно для статистики, в срок или нет выполнена
//   "notifications": {
//     "channels": ["telegram"], //останется только тг без сферума
//     "schedule": ["1_day_before"] //
//   },
//   "linkDoc": "", //добавил новое
//   "linkChat": "", //добавил новое, будет для групповой актуально
// },

export const tasks = [
  {
    "id": "task_1",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "personal",
    "repeat": "noRepeat",
    "time_start": "2025-05-10T00:00:00.000Z",
    "time_end": "2025-05-12T00:00:00.000Z",
    "time_end_actual": "2025-05-11T00:00:00.000Z",
    "content": "Сделать утреннюю зарядку",
    "priority": 2,
    "status": "completed",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["1_day_before"]
    },
    "linkDoc": "",
    "linkChat": ""
  },
  {
    "id": "task_2",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "work",
    "repeat": "noRepeat",
    "time_start": "2025-05-05T00:00:00.000Z",
    "time_end": "2025-05-15T00:00:00.000Z",
    "time_end_actual": null,
    "content": "Подготовить новые задания для занятий по математике",
    "priority": 1,
    "status": "in_process",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["1_day_before"]
    },
    "linkDoc": "https://docs.google.com/document/math_tasks",
    "linkChat": ""
  },
  {
    "id": "task_3",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "group",
    "repeat": "noRepeat",
    "time_start": "2025-05-01T00:00:00.000Z",
    "time_end": "2025-05-10T00:00:00.000Z",
    "time_end_actual": "2025-05-11T00:00:00.000Z",
    "content": "Сдать заполненный журнал успеваемости",
    "priority": 1,
    "status": "completed",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["3_days_before", "1_day_before"]
    },
    "linkDoc": "https://docs.google.com/document/journal",
    "linkChat": "https://t.me/group_chat"
  },
  {
    "id": "task_4",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "habits",
    "repeat": "noRepeat",
    "time_start": "2025-05-08T00:00:00.000Z",
    "time_end": "2025-05-25T00:00:00.000Z",
    "time_end_actual": null,
    "content": "Прочитать 10 страниц книги по саморазвитию",
    "priority": 3,
    "status": "in_process",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["1_day_before"]
    },
    "linkDoc": "",
    "linkChat": ""
  },
  {
    "id": "task_5",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "family",
    "repeat": "noRepeat",
    "time_start": "2025-05-10T00:00:00.000Z",
    "time_end": "2025-05-12T00:00:00.000Z",
    "time_end_actual": "2025-05-12T00:00:00.000Z",
    "content": "Сходить с ребенком в музей",
    "priority": 2,
    "status": "completed",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["1_day_before"]
    },
    "linkDoc": "",
    "linkChat": ""
  },
  {
    "id": "task_6",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "work",
    "repeat": "noRepeat",
    "time_start": "2025-04-28T00:00:00.000Z",
    "time_end": "2025-05-05T00:00:00.000Z",
    "time_end_actual": null,
    "content": "Подготовить годовой отчет по успеваемости",
    "priority": 1,
    "status": "in_process",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["1_week_before", "3_days_before"]
    },
    "linkDoc": "https://docs.google.com/document/annual_report",
    "linkChat": ""
  },
  {
    "id": "task_7",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "personal",
    "repeat": "noRepeat",
    "time_start": "2025-05-05T00:00:00.000Z",
    "time_end": "2025-05-18T00:00:00.000Z",
    "time_end_actual": "2025-05-20T00:00:00.000Z",
    "content": "Записаться на курсы английского языка",
    "priority": 2,
    "status": "completed",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["3_days_before"]
    },
    "linkDoc": "",
    "linkChat": ""
  },
  {
    "id": "task_8",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "habits",
    "repeat": "noRepeat",
    "time_start": "2025-05-01T00:00:00.000Z",
    "time_end": "2025-05-22T00:00:00.000Z",
    "time_end_actual": null,
    "content": "Пить 2 литра воды в день",
    "priority": 3,
    "status": "in_process",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["1_day_before"]
    },
    "linkDoc": "",
    "linkChat": ""
  },
  {
    "id": "task_9",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "work",
    "repeat": "noRepeat",
    "time_start": "2025-05-05T00:00:00.000Z",
    "time_end": "2025-05-08T00:00:00.000Z",
    "time_end_actual": "2025-05-08T00:00:00.000Z",
    "content": "Провести мониторинг знаний по русскому языку",
    "priority": 2,
    "status": "completed",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["1_day_before"]
    },
    "linkDoc": "https://docs.google.com/document/monitoring",
    "linkChat": "https://t.me/teachers_chat"
  },
  {
    "id": "task_10",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "group",
    "repeat": "noRepeat",
    "time_start": "2025-05-10T00:00:00.000Z",
    "time_end": "2025-05-12T00:00:00.000Z",
    "time_end_actual": null,
    "content": "Опубликовать новости в родительской группе",
    "priority": 3,
    "status": "in_process",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["1_day_before"]
    },
    "linkDoc": "",
    "linkChat": "https://t.me/parents_group"
  },
  {
    "id": "task_11",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "family",
    "repeat": "noRepeat",
    "time_start": "2025-05-01T00:00:00.000Z",
    "time_end": "2025-05-15T00:00:00.000Z",
    "time_end_actual": null,
    "content": "Записать ребенка на дополнительные занятия по рисованию",
    "priority": 2,
    "status": "in_process",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["3_days_before"]
    },
    "linkDoc": "",
    "linkChat": ""
  },
  {
    "id": "task_12",
    "user_id": "66614df5966ed02f7a77de9c",
    "task_type": "personal",
    "repeat": "noRepeat",
    "time_start": "2025-05-10T00:00:00.000Z",
    "time_end": "2025-05-11T00:00:00.000Z",
    "time_end_actual": null,
    "content": "Купить продукты на неделю",
    "priority": 1,
    "status": "in_process",
    "notifications": {
      "channels": ["telegram"],
      "schedule": ["1_day_before"]
    },
    "linkDoc": "",
    "linkChat": ""
  }
];