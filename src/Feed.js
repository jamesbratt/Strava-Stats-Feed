import React from 'react';
import Visualization from './Visualization';

const Feed = ({ charts }) => {
    return (
        <div className="feed">{charts.map((c, i) => <Visualization key={i} />)}</div>
    );
};

export default Feed;
