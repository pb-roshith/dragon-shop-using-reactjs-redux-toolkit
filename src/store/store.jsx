import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";

const store = configureStore({
    reducer: {
        cart: cartslice
    }
})

export default store;