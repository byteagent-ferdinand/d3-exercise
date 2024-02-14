import {format, DSVRowString, extent, scaleLinear, scaleTime, timeFormat, timeParse} from 'd3';
import React from 'react';
import '../components/temperature.css'

import {useData} from "../useData";
import {AxisBottom} from "./AxisBottom";
import {AxisLeft} from "./AxisLeft";
import {Marks} from "./Marks";


const Temperature: React.FC = () => {

    const data = useData();
    const validData = data ? data.filter(d => d.timestamp) : [];

    const width = 960;
    const height = 500;
    const margin = {top: 20, right: 20, bottom: 60, left: 300 };
    const xAxisLabelOffset = 50;
    const yAxisLabelOffset = 60;
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;


    const parseDate = (dateString: string) => {
        const parsedDate = new Date(dateString);
        return isNaN(parsedDate.getTime()) ? null : parsedDate;
    };

    const xValue = (d: DSVRowString<string>) => parseDate(d.timestamp);
    const yValue = (d: DSVRowString<string>) => parseFloat(d.temperature);


    const xScale = scaleTime()
        .domain(extent(validData, xValue) as [Date, Date])
        .range([0, innerWidth]);

    const yScale = scaleLinear()
        .domain(extent(validData, yValue) as [number, number])
        .range([innerHeight, 0])
        .nice();

    const xAxisTickFormat = timeFormat('%a'); // %a steht für die abgekürzte Form des Wochentags
    const yAxisTickFormat = (value: number) => `${value} °C`;



    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>

                {data ? (
                    <Marks
                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}/>
                ) : null}

                <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat}></AxisBottom>
                <AxisLeft yScale={yScale} innerWidth={innerWidth} innerHeight={innerHeight} tickFormat={yAxisTickFormat}></AxisLeft>

                <text
                    className="axis-label"
                    x={-innerHeight/2}
                    y={-yAxisLabelOffset}
                    textAnchor="middle"
                    transform={`rotate(-90)`}>
                    Temperature
                </text>

                <text
                    className="axis-label"
                    x={innerWidth/2}
                    y={innerHeight + xAxisLabelOffset}
                    textAnchor="middle">
                    Day
                </text>

            </g>
        </svg>

    );
};

export default Temperature;
