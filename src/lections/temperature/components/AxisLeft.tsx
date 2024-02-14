import React from "react";
import {ScaleBand, ScaleLinear} from "d3";

interface AxisLeftProps {
    yScale: ScaleLinear<number, number>,
    innerWidth: number,
    innerHeight: number,
    tickFormat: (value: number) => string
}

export const AxisLeft: React.FC<AxisLeftProps> = ({ yScale, innerWidth, innerHeight, tickFormat}) => (
    <>
        <g className="tick">
            <line
                className={"tick"}
                x1={0}
                x2={innerWidth}
                y1={0}
                y2={0}>
            </line>
        </g>
        {yScale.ticks().map(tickValue => (
            <g className="tick">
                <line
                    className={"tick"}
                    x1={0}
                    x2={innerWidth}
                    y1={yScale(tickValue)}
                    y2={yScale(tickValue)}>
                </line>
                <text
                    key={tickValue}
                    style={{textAnchor: 'end'}}
                    x={-3}
                    y={yScale(tickValue)}>
                    {tickFormat(tickValue)}
                </text>
            </g>
        ))}

    </>
);
