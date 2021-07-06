import React, { useReducer } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';

import './css/styles.css';

const initialCharts = [];

function chartReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        default:
            throw new Error();
    }
}

const App = () => {

    const [charts, dispatch] = useReducer(chartReducer, initialCharts);

    return (
        <div className="app-wrapper">
            <Sidebar addChart={dispatch} />
            <Feed charts={charts} />
        </div>
    );
}

export default App;