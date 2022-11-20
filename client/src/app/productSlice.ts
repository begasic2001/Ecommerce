import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from '~/api';
import { IProductParams } from '~/interface/api.type';
import { IProductInitial } from '~/interface/redux.type';

export const getProductListBySearch = createAsyncThunk(
  'product/search',
  async (params: IProductParams) => {
    const response: any = await productApi.getByQueryParams(params);
    return response;
  }
);

const initialState: IProductInitial = {
  loading: true,
  data: [],
  err: null,
  isSearch: false,
  pagination: {
    _page: 0,
    _limit: 0,
    _totalPages: 0,
    _totalRows: 0,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleSearch(state, action) {
      if (action.payload) state.isSearch = false;
      else state.isSearch = true;
    },
  },
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

export const { toggleSearch } = productSlice.actions;
export default productSlice.reducer;
