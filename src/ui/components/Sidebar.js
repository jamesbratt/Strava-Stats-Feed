import React, { useEffect, useState } from 'react';
import JsonAnalyse from 'react-json-analyse';

import { getAthleteActivities } from '../sources/Strava';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const Sidebar = ({ addChart, chartToEdit, isOpen, authenticationToken, onClose }) => {
    const [data, updateData] = useState(null);
    useEffect(() => {
        getAthleteActivities(authenticationToken)
            .then(activities => updateData(activities))
            .catch(() => console.error('Error'));
    }, []);

    let classes = 'sidebar';
    if (isOpen) {
        classes = classes += ' open';
    }

    return (
        <div className={classes}>
            <button onClick={() => onClose(false)}>Close</button>
            {data ? <JsonAnalyse json={data} onSubmit={(data) => addChart({ type: chartToEdit ? 'update' : 'add', payload: { data, id: chartToEdit || uuidv4(), isEditing: true, lastUpdated: new Date() } })} /> : <>Loading...</>}
        </div>
    );
}

export default Sidebar;
