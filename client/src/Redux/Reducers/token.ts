import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определяем тип состояния
interface TokenState {
  value: string | null  // Токен может быть строкой или null (если не установлен)
}

// Инициализируем начальное состояние
const initialState: TokenState = {
  value: null, // По умолчанию токена нет
};

// Создаём slice
const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    // Экшен для установки токена
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload; // Устанавливаем значение токена
    },
    // Экшен для удаления токена
    removeToken: (state) => {
      state.value = null; // Удаляем токен, устанавливая null
    },
    // Экшен для обновления токена
    updateToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload; // Обновляем токен новым значением
    },
  },
});

// Экспортируем экшены и редьюсер
export const { setToken, removeToken, updateToken } = tokenSlice.actions;
export default tokenSlice.reducer;
