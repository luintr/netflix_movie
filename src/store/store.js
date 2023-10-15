import { configureStore } from "@reduxjs/toolkit";
import { ham, login, signup } from ".";

const store = configureStore({
    reducer: {
        login: login.func.reducer,
        signup: signup.func.reducer,
        hamburger: ham.func.reducer,
    },
});

export default store;
