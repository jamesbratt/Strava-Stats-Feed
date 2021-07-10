const STRAVA_API_BASE_URL = 'https://www.strava.com/api/v3/';

export const getAthleteActivities = (authenticationToken) => {
    return fetch(`${STRAVA_API_BASE_URL}/athlete/activities`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer gffg`
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.errors && data.message) {
            throw Error(data.message);
        }
        return data;
    })
    .catch(({ message }) => {
        if (message === 'Authorization Error') {
            sessionStorage.removeItem('strava_profile');
        } else {
            return message;
        }
    });
}