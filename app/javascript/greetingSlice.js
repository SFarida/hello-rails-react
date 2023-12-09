import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    greeting: ''
};

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {
        setGreeting(state, action) {
            state.greeting = action.payload;
        }
    }
});

export const { setGreeting } = greetingSlice.actions;

export const fetchGreeting = () => async (dispatch) => {
    const response = await fetch('/api/random_greeting');
    const data = await response.json();
    console.log("greeting in actions")
    console.log("greetings fetched in slice", data, data.greeting)
    dispatch(setGreeting(data));
};

export default greetingSlice.reducer;