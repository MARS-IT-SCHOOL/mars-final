//dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создаем асинхронное действие для загрузки данных с сервера
export const allUsersData = createAsyncThunk(
  'data/allUsersData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/data');
      const userData = await response.json();
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Начальное состояние
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// Создаем слайс для управления данными
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allUsersData.pending, (state) => {
        // Устанавливаем флаг загрузки в true при отправке запроса
        state.loading = true;
        state.error = null; // Обнуляем ошибку при начале загрузки
      })
      .addCase(allUsersData.fulfilled, (state, action) => {
        // Помещаем полученные данные в состояние и устанавливаем флаг загрузки в false при успешной загрузке
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(allUsersData.rejected, (state, action) => {
        // Устанавливаем флаг загрузки в false и сохраняем ошибку при ошибке загрузки
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Экспортируем редьюсер
export default dataSlice.reducer;