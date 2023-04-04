import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    error: null,
}

const signUpSlice = createSlice({
    name: 'signUp',
    initialState: initialState,
    reducers: {
        signUpSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        signUpFailure: (state, action) => {
            state.user = null;
            state.error = action.payload;
        }
    }
});

export const { signUpSuccess, signUpFailure } = signUpSlice.actions;

export const signUp = (name, email, password) => {
    return dispatch => {
        axios.post(`https://demo3134320.mockable.io/sing-up`, { 
            name,
            email,
            password
        }).then(response => {
            const data = response.data;
            if (data.success) {
                dispatch(signUpSuccess(data.user));
            } else {
                dispatch(signUpFailure(data.user));
            }
        }).catch(error => {
            dispatch(signUpFailure(error.message));
        });
    };
};

export default signUpSlice.reducer;