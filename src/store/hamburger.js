import { createSlice } from "@reduxjs/toolkit";

const hamFunc = createSlice({
    name: 'hamburger',
    initialState: {
        isOpen: false
    },
    reducers: {
        isActive(state) {
            state.isOpen = !state.isOpen
        }
    }
})

export const hamActions = hamFunc.actions

export default hamFunc