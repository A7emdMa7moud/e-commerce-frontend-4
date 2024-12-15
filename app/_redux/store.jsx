"use client";

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

// Create a custom storage logic
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// Reducers
import cartReducer from "./features/cart/cartSlice";
import orderReducer from "./features/order/orderSlice";
import userReducer from "./features/user/userSlice";
import ordersReducer from "./features/orders/ordersSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "order", "orders"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  order: orderReducer,
  orders: ordersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor =
  typeof window !== "undefined" ? persistStore(store) : null;
