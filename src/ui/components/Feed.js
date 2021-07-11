import React from 'react';
import Visualization from './Visualization';

const Feed = ({ charts }) => {
    return (
        <div className="feed"><div className="feed-inner">{charts.map((chartData, i) => <Visualization key={i} data={chartData} />)}</div></div>
    );
};

export default Feed;
