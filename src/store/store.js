import { configureStore } from '@reduxjs/toolkit';
import loginFunc from './login';
import signupFunc from './signup';
import hamFunc from './hamburger'

const store = configureStore({
    reducer: {
        login: loginFunc.reducer,
        signup: signupFunc.reducer,
        hamburger: hamFunc.reducer
    },
});

export default store