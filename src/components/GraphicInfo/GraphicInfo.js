import React, {Component} from 'react';
import './GraphicInfo.css'
import {Line} from "react-chartjs-2";

class GraphicInfo extends Component {

    state = {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Date',
                        fontSize: 10
                    },
                    type: 'time',
                    time: {
                        unit: 'day'
                    },
                    // responsive: true
                }],
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: false
                        }
                    }
                ]
            }
        }
    };

    render() {

        return (
            <div className={'graphic-info'}>
                <h3>Chart Line</h3>
                <Line
                    options={this.state.options}
                    data={{
                        // labels - в массиве sparkline_7d 168 часов - 7 последних дней и их надо как-то вывести
                        labels: ['1', '2', '3'] ,
                        datasets: [{
                            label: 'За 7 дней',
                            data: this.props.sparkline_7d,
                            fill: 'none',
                            backgroundColor: 'blue',
                            pointRadius: 2,
                            borderColor: '#70CAD1',
                            borderWidth: 1,
                            lineTension: 0
                        }]
                    }}
                />
            </div>
        );
    }
}

export default GraphicInfo;