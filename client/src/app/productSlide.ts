import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '~/api';

export interface CounterState {
  hot: {
    loading: boolean;
    data: any;
    err: any;
  };
  new: {
    loading: boolean;
    data: any;
    err: any;
  };
  filter: {
    loading: boolean;
    data: any;
    err: any;
  };
}

const getFilterProducts = createAsyncThunk('product/all', async (params: any, { rejectWithValue }) => {
  try {
    const res = await productApi.getAll(params);
    return res;
  } catch (err: any) {
    return rejectWithValue({
      message: err.message,
      data: err.response.data,
      status: err.response.status,
      headers: err.response.headers,
    });
  }
});


const getHotProducts = createAsyncThunk('product/hot', async (params, { rejectWithValue }) => {
  try {
    const res = await productApi.getHotProducts();
    return res;
  } catch (err: any) {
    return rejectWithValue({
      message: err.message,
      data: err.response.data,
      status: err.response.status,
      headers: err.response.headers,
    });
  }
});

const initialState: CounterState = {
  hot: {
    loading: true,
    data: [],
    err: null,
  },
  new: {
    loading: true,
    data: [],
    err: null,
  },
  filter: {
    loading: true,
    data: [],
    err: null,
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHotProducts.fulfilled, (state, action) => {
      state.hot.loading = false;
      state.hot.data = action.payload.data.productData;
    });
    builder.addCase(getHotProducts.rejected, (state, action) => {
      state.hot.loading = false;
      state.hot.err = action.payload;
    });
    builder.addCase(getFilterProducts.fulfilled, (state, action) => {
      state.filter.loading = false;
      state.filter.data = action.payload.data.productData;
    });
    builder.addCase(getFilterProducts.rejected, (state, action) => {
      state.filter.loading = false;
      state.filter.err = action.payload;
    });
  },
});

export { getHotProducts, getFilterProducts };
export default productSlice.reducer;
