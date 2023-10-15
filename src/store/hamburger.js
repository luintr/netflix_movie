import { createSlice } from "@reduxjs/toolkit";

const func = createSlice({
    name: "hamburger",
    initialState: {
        isOpen: false,
    },
    reducers: {
        isActive(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

const ham = {
    func,
    actions: func.actions,
};

export default ham;
