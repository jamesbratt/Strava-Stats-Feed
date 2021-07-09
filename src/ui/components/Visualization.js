import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Visualization = () => {

    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            new Chart(chartRef.current, {
                type: 'bar',
                data: {},
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }, [chartRef])

    return (
        <canvas ref={chartRef} width="400" height="200" />
    )
}

export default Visualization;