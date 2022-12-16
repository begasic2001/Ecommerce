import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export interface CounterState {
  data: any;
}

const initialState: CounterState = {
  data: JSON.parse(Cookies.get('userCart') || '[]'),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const indexItem: number = state.data.findIndex((item: any) => item.id === action.payload.id);

      if (indexItem !== -1) {
        const basePrice = state.data[indexItem].basePrice;
        const amount = state.data[indexItem].quantity + action.payload.quantity || 1;

        state.data[indexItem].price = basePrice * amount;
        state.data[indexItem].quantity = amount;
      } else state.data.push(action.payload);

      Cookies.set('userCart', JSON.stringify(state.data));
    },
    remove(state, action) {
      const indexItem: number = state.data.findIndex((item: any) => item.id === action.payload.id);
      state.data.splice(indexItem, 1);

      Cookies.set('userCart', JSON.stringify(state.data));
    },
    removeAll(state) {
      state.data = [];
      Cookies.remove('userCart');
    },
    updateAll(state, action) {
      state.data = [];
      state.data = action.payload;

      Cookies.set('userCart', JSON.stringify(state.data));
    },
  },
});

export const { add, updateAll, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
