import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Visualization = ({ data }) => {

    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: data.categories,
                    datasets: [
                        {
                            label: 'Dataset',
                            data: data.series,
                        },
                    ]
                },
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
        <div className="chart-outer">
            <div className="chart-inner">
                <canvas ref={chartRef} />
            </div>
        </div>
    )
}

export default Visualization;