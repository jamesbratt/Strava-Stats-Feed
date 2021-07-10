import React, { useEffect } from 'react';
import { navigate  } from '@reach/router';

const Auth = ({ stravaProfile, setStravaProfile }) => {
    useEffect(() => {
        const url = new URL(window.location);
        const code = url.searchParams.get('code');

        fetch(process.env.OAUTH_CLIENT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
        })
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem('strava_profile', JSON.stringify(data));
            setStravaProfile(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    if (stravaProfile) {
        navigate ('/');
    }

    return (
        <div>
            Authenticating...
        </div>
    );
}

export default Auth;