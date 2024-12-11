import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        cartControl: cartReducer
    }
});

export default store;