import { combineReducers } from '@reduxjs/toolkit';

import { reducer as calendarReducer } from 'src/app/slices/calendar';
import { reducer as chatReducer } from 'src/app/slices/chat';
import { reducer as kanbanReducer } from 'src/app/slices/kanban';
import { reducer as mailReducer } from 'src/app/slices/mail';

export const rootReducer = combineReducers({
  calendar: calendarReducer,
  chat: chatReducer,
  kanban: kanbanReducer,
  mail: mailReducer,
});
