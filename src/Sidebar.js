import React from 'react';
import JsonAnalyse from 'react-json-analyse';

const Sidebar = ({ addChart }) => {
    return (
        <div className="sidebar">
            <JsonAnalyse json={[]} onSubmit={(data) => addChart({ type: 'add', payload: data })} />
        </div>
    );
}

export default Sidebar;
