import { createSlice } from "@reduxjs/toolkit";

const func = createSlice({
    name: "login",
    initialState: {
        loginState: false,
        formState: false,
        editForm: false,
    },
    reducers: {
        isLogin(state) {
            state.loginState = !state.loginState;
        },

        openEditform(state) {
            state.editForm = !state.editForm;
        },

        setLoginTrue(state) {
            state.loginState = true;
        },

        setLoginFalse(state) {
            state.loginState = false;
        },

        setFormStateTrue(state) {
            state.formState = true;
        },

        setFormStateFalse(state) {
            state.formState = false;
        },

        changeForm(state) {
            state.formState = !state.formState;
        },
    },
});

const login = {
    func,
    actions: func.actions,
};

export default login;
