import React, { useState } from 'react';
import Auth from './Auth';
import FeedWrapper from './components/FeedWrapper';

import { Router } from '@reach/router';

import './css/styles.css';

const stravaProfileInSession = sessionStorage.getItem('strava_profile');

const App = () => {

    const [stravaProfile, setStravaProfile] = useState(stravaProfileInSession ? JSON.parse(stravaProfileInSession) : null); 

    return (
        <Router>
            <FeedWrapper path="/" stravaProfile={stravaProfile} />
            <Auth path="authenticate" stravaProfile={stravaProfile} setStravaProfile={setStravaProfile} />
        </Router>
    );
}

export default App;