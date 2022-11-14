import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { producApi } from '~/api';

export const getSearchResult = createAsyncThunk('search/getAll', async (params) => {
  const res = await producApi.getAll(params);
  return res.data;
});

interface ISearchState {
  value: '';
  data: [];
  loading: boolean;
  err: string | null;
}

const initialState: ISearchState = {
  value: '',
  data: [],
  loading: true,
  err: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onChangeValue(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [`${getSearchResult.rejected}`]: (state, action: any) => {
      state.loading = false;
      state.err = action.console.error;
    },
    [`${getSearchResult.fulfilled}`]: (state, action: any) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { onChangeValue } = searchSlice.actions;
export default searchSlice.reducer;
