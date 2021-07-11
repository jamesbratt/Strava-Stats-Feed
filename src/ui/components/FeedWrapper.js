import React, { useReducer } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';

import '../css/styles.css';

const initialCharts = [];

function chartReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        default:
            throw new Error();
    }
}

const FeedWrapper = ({ stravaProfile }) => {

    const [charts, dispatch] = useReducer(chartReducer, initialCharts);
    
    let stravaLoginUrl = `https://www.strava.com/oauth/authorize`;
    stravaLoginUrl += `?client_id=${process.env.CLIENT_ID}`;
    stravaLoginUrl += `&redirect_uri=${process.env.REDIRECT_URI}`;
    stravaLoginUrl += `&scope=read_all,profile:read_all,activity:read_all`;
    stravaLoginUrl += `&response_type=code`
    
    return (
        <div className="app-wrapper full-height">
            {
                !stravaProfile ?
                    <a href={stravaLoginUrl}>Login</a> :
                    <>
                        <Sidebar addChart={dispatch} authenticationToken={stravaProfile.access_token} />
                        <Feed charts={charts} />
                    </>
            }
        </div>
    );
}

export default FeedWrapper;