// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
