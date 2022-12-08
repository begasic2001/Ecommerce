import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApi } from '~/api';
import { RegisterSubmitValue } from '~/pages/account/register';
import Cookies from 'js-cookie';

export interface CounterState {
  loading: boolean;
  data: any;
  err: any;
}

const registerUser = createAsyncThunk(
  'users/register',
  async (data: RegisterSubmitValue, { rejectWithValue }) => {
    try {
      const res = await userApi.registry(data);
      return res;
    } catch (err: any) {
      return rejectWithValue({
        message: err.message,
        data: err.response.data,
        status: err.response.status,
        headers: err.response.headers,
      });
    }
  }
);

const initialState: CounterState = {
  loading: true,
  data: {},
  err: null,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.err = action.payload;
    });
  },
});

export { registerUser };
export default counterSlice.reducer;
