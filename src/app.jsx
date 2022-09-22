import React from 'react';
import ReactDOM from 'react-dom/client';

import "./css/style.css"

import Main from './components/Main';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
)
