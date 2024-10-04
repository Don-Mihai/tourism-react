//Исправленный и дополненный мой код чатомжпт

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  hotels: [], // Массив для хранения всех отелей
  hotel: {}, // Текущий выбранный отель
  hotelId: '', // Id текущего отеля
  isLoading: false, // Статус загрузки
  error: null, // Статус ошибки
};

// Асинхронный запрос для получения отеля по id
export const fetchHotelById = createAsyncThunk('hotel/fetchByIdStatus', async (hotelId) => {
  const id = hotelId || localStorage.getItem('hotelId');
  const hotel = (await axios.get(`http://localhost:3001/hotels/${id}`)).data;
  return hotel;
});

// Асинхронный запрос для редактирования отеля
export const editHotel = createAsyncThunk('hotel/edit', async (hotel) => {
  const resHotel = (await axios.put(`http://localhost:3001/hotels/${hotel.id}`, hotel)).data;
  return resHotel;
});

// Асинхронный запрос для удаления отеля
export const deleteHotel = createAsyncThunk('hotel/delete', async (hotelId) => {
  await axios.delete(`http://localhost:3001/hotels/${hotelId}`);
});

export const hotelsSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    // Здесь могут быть синхронные функции, если нужно
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelById.pending, (state) => {
        state.isLoading = true; // Начинается загрузка
        state.error = null; // Очищаем ошибку перед новой загрузкой
      })
      .addCase(fetchHotelById.fulfilled, (state, action) => {
        state.isLoading = false; // Завершили загрузку
        state.hotel = action.payload; // Сохраняем полученный отель
      })
      .addCase(fetchHotelById.rejected, (state, action) => {
        state.isLoading = false; // Завершаем загрузку
        state.error = action.error.message; // Записываем ошибку, если загрузка провалилась
      })

      .addCase(editHotel.fulfilled, (state, action) => {
        state.hotel = action.payload; // Обновляем отель после редактирования
      })

      .addCase(deleteHotel.fulfilled, (state) => {
        state.hotel = {}; // Очищаем данные отеля после удаления
      })

      .addCase(deleteHotel.rejected, (state, action) => {
        state.error = action.error.message; // Обрабатываем ошибку при удалении
      });
  },
});

export default hotelsSlice.reducer;

/* Мой код
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  hotel: {},
  hotelId: '',
};

export const fetchHotelById = createAsyncThunk('hotel/fetchByIdStatus', async (hotelId) => {
  const hotel = (await axios.get(`http://localhost:3001/hotels/${id}`)).data;
  return hotel;
});

export const hotelsSlice = createSlice({
  name: 'hotel',
  initialState,
  extraReducers: (builder) => {
  builder
    .addCase(fetchHotelById.fulfilled, (state, action) => {
      state.hotel = action.payload;
    })
    .addCase(editHotel.fulfilled, (state, action) => {
      state.hotel = action.payload;
    })
    .addCase(deleteHotel.fulfilled, (state, action) => {
      state.hotel = {};
    });
};

export const editHotel = createAsyncThunk('hotel/edit', async (hotel) => {
  const resHotel = (await axios.put(`http://localhost:3001/hotels/${hotel.id}`, hotel)).data;
  return resHotel;
});

export const deleteHotel = createAsyncThunk('hotel/delete', async (hotelId) => {
  axios.delete(`http://localhost:3001/hotels/${hotelId}`);
});
*/
