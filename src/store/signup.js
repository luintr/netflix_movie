import { createSlice } from "@reduxjs/toolkit";

const signupFunc = createSlice({
    name: 'signup',
    initialState: {
        data: {
            name: '',
            usename: '',
            password: ''
        }
    },

    reducers: {
        // isSignup(state) {

        // }
    }
})

export const signupActions = signupFunc.actions

export default signupFunc