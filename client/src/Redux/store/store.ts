import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../Reducers/token';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

// Типизируем Dispatch и RootState для использования в приложении
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
