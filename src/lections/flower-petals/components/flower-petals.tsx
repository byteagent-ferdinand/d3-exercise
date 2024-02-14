import { format, DSVRowString, extent, scaleLinear} from 'd3';
import React from 'react';
import '../components/flower-petals.css'

import {useData} from "../useData";
import {AxisBottom} from "./AxisBottom";
import {AxisLeft} from "./AxisLeft";
import {Marks} from "./Marks";


const FlowerPetals: React.FC = () => {

    const data = useData();
    const validData = data ? data.filter(d => !isNaN(parseFloat(d.sepal_length))) : [];

    const width = 960;
    const height = 500;
    const margin = {top: 20, right: 20, bottom: 60, left: 300 };
    const xAxisLabelOffset = 50;
    const yAxisLabelOffset = 40;
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const xValue = (d: DSVRowString<string>) => parseFloat(d.petal_length);
    const yValue = (d: DSVRowString<string>) => parseFloat(d.sepal_width);

    const xScale = scaleLinear()
        .domain(extent(validData, xValue) as [number, number])
        .range([0, innerWidth])
        .nice();

    const yScale = scaleLinear()
        .domain(extent(validData, yValue) as [number, number])
        .range([0, innerHeight])
        .nice();



    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>

                {data ? (
                    <Marks
                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}
                    />
                ) : null}

                <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={format(".2s")}></AxisBottom>
                <AxisLeft yScale={yScale} innerWidth={innerWidth} innerHeight={innerHeight}></AxisLeft>

                 <text
                     className="axis-label"
                     x={-innerHeight/2}
                     y={-yAxisLabelOffset}
                     textAnchor="middle"
                     transform={`rotate(-90)`}>
                     Sepal Width
                 </text>

                 <text
                     className="axis-label"
                     x={innerWidth/2}
                     y={innerHeight + xAxisLabelOffset}
                     textAnchor="middle">
                     Petal Length
                 </text>

            </g>
        </svg>

    );
};

export default FlowerPetals;
