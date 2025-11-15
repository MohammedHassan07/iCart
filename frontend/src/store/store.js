import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import favouriteItemsReducer from './favouriteItem'

export const store = configureStore({
    reducer: {

        cart: cartReducer,
        favouriteItems: favouriteItemsReducer
    }
})