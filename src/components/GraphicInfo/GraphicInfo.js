import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

class GraphicInfo extends Component {

    state = {
        type: 'line',
        options: {
            scales: {
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            unit: 'week'
                        }
                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            min: 0
                        }
                    }
                ]
            }
        },
        data: {
            labels: 0,
            datasets: [{
                label: 'New надпись',
                data: [],
                fill: 'none',
                backgroundColor: 'blue',
                pointRadius: 2,
                borderColor: '#70CAD1',
                borderWidth: 1,
                lineTension: 0
            }]
        }
    };

    render() {
        console.log(this.props.sparkline_7d);

        return (
            <div>
                <h3>Chart Line</h3>
                <Line
                    options={{
                        responsive: true
                    }}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default GraphicInfo;