import React from 'react';
import {Bar} from 'react-chartjs-2'

const BarChartMain = ({categories}) => {
    return (
        <>
            <Bar
                className="shadow-sm rounded p-2"
                data={{
                    labels: categories.map((category) => {
                        return category.category
                    }),
                    datasets: [{
                        label: "Categories",
                        data: categories.map((category) => {
                            return category.article_count
                        }),
                        backgroundColor: [
                            'rgba(255, 45, 0, 1)',
                            'rgba(140, 46, 255, 1)',
                            'rgba(61, 184, 191, 1)',
                            'rgba(223, 206, 20, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 194, 255, 1)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }],
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    },
                }}
            />
        </>
    );
};

export default BarChartMain;