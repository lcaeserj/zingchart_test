import 'zingchart/es6'
import ZingChart from "zingchart-react/dist/index.es";
import "zingchart/modules-es6/zingchart-maps.min";
import "zingchart/modules-es6/zingchart-maps-usa.min"
import React from "react";
import chartData from "./WorldPopData";
import "zingchart/modules-es6/zingchart-sunburst.min"


class SunburstTest extends React.Component {
    constructor() {
        super();
        this.state = {
            config: {
                type: 'sunburst',
                borderWidth: '1px',
                title: {
                    text: 'Countries of the World'
                },
                plot: {
                    'value-box': {
                        text: '%data-vbtext',
                        'font-size': '10px',
                    },
                    tooltipText: '<span style=\'font-size:19px\'>%plot-text</span><br/>Population: %node-value'
                },
                plotarea: {
                    margin: '40px 0px 0px 0px'
                },
                tooltip: {
                    align: 'left',
                    thousandsSeparator: ','
                },
                series: chartData
            }
        }
    };

    render() {
        return (
            <div>
            <ZingChart/>
        </div>
        )
    }
}

export default SunburstTest