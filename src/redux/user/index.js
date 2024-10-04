import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils';

const initialState = {
  user: {},
  userId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  //в reducers записывааются все синхронные функции, асинхронные - отдельно
  reducers: {
    setLocalUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem('userId', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.user = {};
      });

    // .addCase(fetchUserById.pending, (state, action) => {
    //   // процесс загрузки
    //   state.isLoading = true;
    // })
    // .addCase(fetchUserById.rejected, (state, action) => {
    //   // неуспешное выполнени(catch/error и тд)
    //   state.user = {};
    // });
  },
});

export const fetchUserById = createAsyncThunk('user/fetchByIdStatus', async (userId) => {
  const id = userId || localStorage.getItem('userId');
  const user = (await axios.get(`${API_URL}users/${id}`)).data;
  return user;
});

export const editUser = createAsyncThunk('user/edit', async (user) => {
  const resUser = (await axios.put(`${API_URL}users/${user.id}`, user)).data;

  return resUser;
});

export const deleteUser = createAsyncThunk('user/delete', async (userId) => {
  axios.delete(`${API_URL}users/${userId}`);
});

// Action creators are generated for each case reducer function
export const { setLocalUserId } = userSlice.actions;

export default userSlice.reducer;
