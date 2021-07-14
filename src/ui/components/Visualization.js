import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Visualization = ({ id, data, onEdit, lastUpdated }) => {

    const chartRef = useRef(null);
    const [chartInstance, updateChartInstance] = useState(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const instance = new Chart(chartRef.current, {
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

            updateChartInstance(instance);
        }
    }, [chartRef]);

    useEffect(() => {
        if (chartInstance) {
            const newChartData = {
                labels: data.categories,
                datasets: [
                    {
                        label: 'Dataset',
                        data: data.series,
                    },
                ]
              };
    
            chartInstance.data = newChartData;
            chartInstance.update();
        }
    }, [chartInstance, lastUpdated]);

    return (
        <div className="chart-outer">
            <div className="chart-inner">
                <canvas ref={chartRef} />
            </div>
            <button onClick={() => onEdit({ type: 'edit', payload: id })}>Edit</button>
        </div>
    )
}

export default Visualization;