import 'zingchart/es6'
import ZingChart from "zingchart-react/dist/index.es";
import "zingchart/modules-es6/zingchart-maps.min";
import "zingchart/modules-es6/zingchart-maps-usa.min"
import React from "react";
import chartData from './chartData'
import "zingchart/modules-es6/zingchart-tree.min"


class RadialNetworkChart extends React.Component {
    constructor() {
        super();
        this.state = {
            config: {
                type: 'tree',
                options: {
                    aspect: 'tree-radial',
                    progression: 0,
                    textAttr: 'name',
                    valueAttr: 'value',
                    minSize: 4,
                    maxSize: 10,
                    link: {
                        aspect: 'arc'
                    },
                    node: {
                        type: 'circle',
                        borderWidth: 0,
                        hoverState: {
                            borderWidth: 2,
                            borderColor: '#000',
                            borderAlpha: 1
                        },
                        label: {
                            width: 100
                        }
                    }
                },
                series: chartData
            }
        }
    }

    render() {
        return (
            <div>
                <ZingChart/>
            </div>
        )
    }
}

export default RadialNetworkChart