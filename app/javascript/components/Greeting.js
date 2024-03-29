import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../greetingSlice'

const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.greetings.greeting.greeting);

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    return (
        <div>
            <h2>Greeting:</h2>
            <p>{greeting}</p>
        </div>
    );
};

export default Greeting;