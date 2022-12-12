import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  data: any;
}

const initialState: CounterState = {
  data: [],
};

export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add() {
      
    }
  },
});

export default productSlice.reducer;
