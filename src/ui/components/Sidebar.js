import React, { useEffect, useState } from 'react';
import JsonAnalyse from 'react-json-analyse';

import { getAthleteActivities } from '../sources/Strava';

const Sidebar = ({ addChart, authenticationToken }) => {
    const [data, updateData] = useState(null);
    useEffect(() => {
        getAthleteActivities(authenticationToken)
            .then(activities => updateData(activities))
            .catch(() => console.error('Error'));
    }, []);

    return (
        <div className="sidebar">
            {data ? <JsonAnalyse json={data} onSubmit={(data) => addChart({ type: 'add', payload: data })} /> : <>Loading...</>}
        </div>
    );
}

export default Sidebar;
