import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './reducer/signUpReducer'

export default configureStore({
    reducer: {
        signUp: signUpReducer
    },
});