const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  orders: [],
  ordersLength: 0,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders = action.payload;
      state.ordersLength = state.orders.length || 0;
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
