import { createSlice } from "@reduxjs/toolkit";

const func = createSlice({
    name: "signup",
    initialState: {
        data: {
            name: "",
            username: "",
            password: "",
        },
    },

    reducers: {
        // isSignup(state) {
        // }
    },
});

const signup = {
    func,
    actions: func.actions,
};

export default signup;
