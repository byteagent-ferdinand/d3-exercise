import { format, DSVRowString, max, scaleBand, scaleLinear} from 'd3';
import React from 'react';
import '../components/world-population.css';
import {useData} from "../useData";
import {AxisBottom} from "./AxisBottom";
import {AxisLeft} from "./AxisLeft";
import {Marks} from "../components/Marks";


const WorldPopulation: React.FC = () => {

    const data = useData()
    const width = 960;
    const height = 500;
    const margin = {top: 20, right: 20, bottom: 60, left: 300 };
    const xAxisLabelOffset = 50;
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const yValue = (d: DSVRowString<string>) => d.Country;
    const xValue = (d: DSVRowString<string>) => +d.Population;

    const yScale = scaleBand()
        .domain(data ? data.map(yValue) : [])
        .range([0, innerHeight])
        .paddingInner(0.15)
    ;

    const xScale = scaleLinear()
        .domain(data ? [0, max(data, xValue) || 0] : [0, 0])
        .range([0, innerWidth]);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={format(".2s")}></AxisBottom>
                <AxisLeft yScale={yScale}></AxisLeft>
                <text
                    className="axis-label"
                    x={innerWidth / 2}
                    y={innerHeight + xAxisLabelOffset}
                    textAnchor="middle">
                    Population
                </text>
                {data ? (
                    <Marks
                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}
                    />
                ) : null}
            </g>
        </svg>

    );
};

export default WorldPopulation;
