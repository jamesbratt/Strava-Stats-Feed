import React from 'react';
import Visualization from './Visualization';

const Feed = ({ charts, onEdit }) => {
    return (
        <div className="feed">
            <div className="feed-inner">
                {charts.map((chartData, i) => <Visualization id={chartData.id} onEdit={onEdit} key={i} data={chartData.data} lastUpdated={chartData.lastUpdated} />)}
            </div>
        </div>
    );
};

export default Feed;
