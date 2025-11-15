import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {

        addItem: (state, action) => {
            const item = action.payload;
            const existing = state.cartItems.find(i => i.id === item.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },


        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        clearCart: (state, action) => {
            state.cartItems = []
        },

        increaseQty: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
        },

        decreaseQty: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    }
})

export const { addItem, removeItem, clearCart, increaseQty, decreaseQty } = cartSlice.actions
export default cartSlice.reducer

