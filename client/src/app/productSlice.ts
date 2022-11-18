import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from '~/api';

interface ISearchParams {
  name_like: string;
  _page: 1;
  _limit: 12;
}

export const getProductListBySearch = createAsyncThunk(
  'product/search',
  async (params: ISearchParams) => {
    const response: any = await productApi.getSearch(params);
    return response;
  }
);

interface IInitialState {
  data: any[];
  pagination: {
    _page: number;
    _limit: number;
    _totalRows: number;
  };
  loading: boolean;
  err: any | null;
}

const initialState: IInitialState = {
  data: [],
  pagination: {
    _page: 0,
    _limit: 0,
    _totalRows: 0,
  },
  loading: true,
  err: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductListBySearch.fulfilled, (state, action) => {
      const responseData = action.payload.data;
      const data = responseData.data;
      const pagination = responseData.pagination;

      state.loading = false;
      state.data = data;
      state.pagination = pagination;
    });
    builder.addCase(getProductListBySearch.rejected, (state, action) => {
      const responseData = action.payload;

      state.loading = false;
      state.err = responseData;
    });
  },
});

export default productSlice.reducer;
