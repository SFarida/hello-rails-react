import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../actions/greetingActions';

const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchRandomGreeting());
    }, [dispatch]);

    return (
        <div>
            <h2>Greeting</h2>
            <p>{greeting}</p>
        </div>
    );
};

export default Greeting;