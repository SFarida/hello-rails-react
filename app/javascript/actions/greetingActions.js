// app/javascript/actions/greetingActions.js

export const fetchRandomGreeting = () => async (dispatch) => {
    try {
        const response = await fetch('/api/random_greeting'); // Replace with your actual API endpoint
        const data = await response.json();
        dispatch({ type: 'SET_GREETING', payload: data.greeting });
    } catch (error) {
        console.error('Error fetching random greeting:', error);
    }
};
