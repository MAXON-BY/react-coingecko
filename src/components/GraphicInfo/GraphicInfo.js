import React, {Component} from 'react';
import './GraphicInfo.css'
import {Line} from "react-chartjs-2";

class GraphicInfo extends Component {
    render() {

        const total_in_hours = this.props.sparkline_7d ? this.props.sparkline_7d.map((item,index) => index.toString()) : 0;
        const total_last_7d = this.props.sparkline_7d ? this.props.sparkline_7d.map(item => item.toFixed(4)) : 0;

        return (
            <div className={'graphic-info'}>
                <h3>Chart Line</h3>
                <Line
                    data={{
                        labels: total_in_hours,
                        datasets: [{
                            label: '$',
                            data: total_last_7d,
                            fill: 'none',
                            backgroundColor: 'blue',
                            pointRadius: 2,
                            borderColor: '#70CAD1',
                            borderWidth: 1,
                            lineTension: 0
                        }]
                    }}
                />
                <p>168 Hours in 7 days; 0 - week (7 days ago); 168 - just now</p>
            </div>
        );
    }
}

export default GraphicInfo;