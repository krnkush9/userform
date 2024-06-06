import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // wrapping with redux so that we can use the global store
    <Provider store={Store}>
        {/* wrapping with  BrowserRouter for using the routin*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);
