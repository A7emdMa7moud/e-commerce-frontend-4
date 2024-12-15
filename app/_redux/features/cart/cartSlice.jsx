const { createSlice } = require("@reduxjs/toolkit");
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    productsLenght: 0,
    quantity: 0,
    userId: null,
    isLoaning: false,
    isError: null,
  },
  reducers: {
    updataCart: (state, action) => {
      if (action.payload.quantity > 0) {
        state.items = action.payload.products;
      }
      state.totalPrice += action.payload.totalPrice;
      state.quantity += action.payload.quantity;
      state.productsLenght = action.payload.products.length;
    },
    resetCartState: (state, action) => {
      state.items = [];
      state.productsLenght = 0;
      state.quantity = 0;
      state.totalPrice = 0;
    },
    addToCart: (state, action) => {
      const item = {
        id: state.items.length + 1,
        productId: action.payload.productId,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
        category: action.payload.category,
        discount: action.payload.discount,
      };

      const existingItem = state.items.find((i) => {
        const value = i.productId === item.productId ? true : false;
        return value;
      });
      if (existingItem) {
      } else {
        state.items.push(item);
        state.totalPrice += item.price;
        state.quantity += item.quantity;
        state.productsLenght = state.items.length;
      }
    },
    IncreaseQuantity: (state, action) => {
      state.items.find((e) => {
        if (e.productId === action.payload) {
          state.totalPrice += e.price;
          e.quantity += 1;
          state.quantity++;
        }
      });
    },
    DecreaseQuantity: (state, action) => {
      state.items.find((e) => {
        if (e.productId === action.payload) {
          if (e.quantity >= 2) {
            state.totalPrice -= e.price;
            e.quantity -= 1;
            state.quantity--;
          }
        }
      });
    },
    removeFromCart: (state, action) => {
      state.items.find((e) => {
        if (e.productId === action.payload) {
          state.items = state.items.filter(
            (e) => e.productId !== action.payload
          );
          state.productsLenght = state.items.length;
          state.totalPrice -= e.price * e.quantity;
          state.quantity -= e.quantity;
          state.items.forEach((item, index) => {
            item.id = index + 1;
          });
        }
      });
    },
    checkCart: (state, action) => {
      const item = state.items.find(
        (item) => item.productId === action.payload
      );
      return !!item;
    },
  },
});

export const {
  updataCart,
  resetCartState,
  addToCart,
  IncreaseQuantity,
  DecreaseQuantity,
  removeFromCart,
  checkCart,
} = cartSlice.actions;
export default cartSlice.reducer;
