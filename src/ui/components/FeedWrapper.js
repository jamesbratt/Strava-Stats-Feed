import React, { useReducer, useState } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';

import '../css/styles.css';

const initialCharts = [];

function chartReducer(state, action) {
    const charts = state.map(chart => ({ ...chart, isEditing: false }));
    switch (action.type) {
        case 'add':
            return [...charts, action.payload];
        case 'new':
            return charts;
        case 'edit':
            return charts.map(chart => {
                if (chart.id === action.payload) {
                    return { ...chart, isEditing: true }
                }
                return chart;
            });

        case 'update':
            return charts.map(chart => {
                if (chart.id === action.payload.id) {
                    return action.payload;
                }
                return chart;
            });
        default:
            throw new Error();
    }
}

const FeedWrapper = ({ stravaProfile }) => {

    const [charts, dispatch] = useReducer(chartReducer, initialCharts);
    const [isSidebarOpen, toggleSidebar] = useState(false);

    const createNewChart = () => {
        if (!isSidebarOpen) {
            toggleSidebar(true);
        }

        dispatch({ type: 'new' });
    }
    
    let stravaLoginUrl = `https://www.strava.com/oauth/authorize`;
    stravaLoginUrl += `?client_id=${process.env.CLIENT_ID}`;
    stravaLoginUrl += `&redirect_uri=${process.env.REDIRECT_URI}`;
    stravaLoginUrl += `&scope=read_all,profile:read_all,activity:read_all`;
    stravaLoginUrl += `&response_type=code`;

    const chartToEdit = charts.find(chart => chart.isEditing) || null;
    
    return (
        <div className="app-wrapper full-height">
            {
                !stravaProfile ?
                    <a href={stravaLoginUrl}>Login</a> :
                    <>
                        <Sidebar
                            addChart={dispatch}
                            chartToEdit={chartToEdit ? chartToEdit.id : null}
                            isOpen={isSidebarOpen}
                            authenticationToken={stravaProfile.access_token}
                            onClose={toggleSidebar}
                        />
                        <div className="foo">
                            <Feed onEdit={dispatch} charts={charts} />
                            <div className="add-chart">
                                <button onClick={createNewChart}>Create a New Chart</button>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
}

export default FeedWrapper;