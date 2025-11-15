import { createSlice } from "@reduxjs/toolkit";

const favouriteItemSlice = createSlice({
    name: 'favouriteItem',
    initialState: {
        favouriteItems: [],
    },
    reducers: {

        addFavouriteItem: (state, action) => {

            const item = action.payload
            const existingItem = state.favouriteItems.find(i => i.id === item.id)
            if (!existingItem) {
                state.favouriteItems.push(item)
            }

        },

        removeFavouriteItem: (state, action) => {
            state.favouriteItems = state.favouriteItems.filter(item => item.id !== action.payload);
        }
    }
})

export const { addFavouriteItem, removeFavouriteItem } = favouriteItemSlice.actions
export default favouriteItemSlice.reducer