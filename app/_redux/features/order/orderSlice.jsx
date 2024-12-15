const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  customer: {
    userId: "",
    name: "",
    email: "",
    phone: "",
  },
  shippingAddress: {
    country: "",
    city: "",
    state: "",
    street: "",
    zipCode: "",
  },
  products: [
    {
      name: "",
      price: 0,
      quantity: 0,
      totalPrice: 0,
      discount: 0,
      lastPrice: 0,
    },
  ],
  discount: 0,
  paymentMethod: "",
  deliveryDate: "",
  totalPrice: 0,
  lastPrice: 0,
  customerNotes: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrderState: () => initialState,
    updateCustomer: (state, action) => {
      state.customer = action.payload;
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload.data;
    },
    updateProducts: (state, action) => {
      state.products = action.payload.products;
    },
    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    updateDiscount: (state, action) => {
      state.discount = action.payload;
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    updateLastPrice: (state, action) => {
      state.lastPrice = action.payload;
    },
    updatePhone: (state, action) => {
      state.customer.phone = action.payload;
    },
    updateCustomerNotes: (state, action) => {
      state.customerNotes = action.payload;
    },
    updateDeliveryDate: (state, action) => {
      state.deliveryDate = action.payload;
    },
  },
});

export const {
  resetOrderState,
  updateCustomer,
  updateShippingAddress,
  updateProducts,
  updatePaymentMethod,
  updateDiscount,
  updateTotalPrice,
  updateLastPrice,
  updatePhone,
  updateCustomerNotes,
  updateDeliveryDate,
} = orderSlice.actions;

export default orderSlice.reducer;
