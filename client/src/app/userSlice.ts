import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { userApi } from '~/api';
import { LoginSubmitValue } from '~/pages/account/login';
import { RegisterSubmitValue } from '~/pages/account/register';

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

const loginUser = createAsyncThunk(
  'user/login',
  async (data: LoginSubmitValue, { rejectWithValue }) => {
    try {
      const res = await userApi.login(data);
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

const logoutUser = createAsyncThunk(
  'user/logout',
  async (refreshToken: string, { rejectWithValue }) => {
    try {
      const res = await userApi.logout(refreshToken);
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
  data: JSON.parse(Cookies.get('user') || '{}'),
  err: null,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
      state.err = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;

      const stringifyData = JSON.stringify(action.payload.data);
      Cookies.set('user', stringifyData);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.err = action.payload;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.data = {};
      state.err = null;

      Cookies.remove('user');
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
  },
});

export { registerUser, loginUser, logoutUser };
export default counterSlice.reducer;
