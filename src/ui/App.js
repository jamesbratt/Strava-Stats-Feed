import React, { useState } from 'react';
import Auth from './Auth';
import FeedWrapper from './components/FeedWrapper';

import { Router } from '@reach/router';

import './css/styles.css';

const App = () => {

    const [stravaProfile, setStravaProfile] = useState(null); 

    return (
        <Router>
            <FeedWrapper path="/" stravaProfile={stravaProfile} />
            <Auth path="authenticate" stravaProfile={stravaProfile} setStravaProfile={setStravaProfile} />
        </Router>
    );
}

export default App;