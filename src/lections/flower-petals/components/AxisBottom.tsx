import React from "react";
import {ScaleLinear} from "d3";

interface AxisBottomProps {
    xScale: ScaleLinear<number, number>;
    innerHeight: number;
    tickFormat: any;
}
export const AxisBottom: React.FC<AxisBottomProps> = (
    {
        xScale,
        innerHeight,
        tickFormat}) => (
        <>
            <g className={"tick"}>
                <line
                    className={"tick"}
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={innerHeight}>
                </line>
            </g>
            {xScale.ticks().map((tickValue: any | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.Key | null | undefined, index: React.Key | null | undefined) => (
                <g className={"tick"} key={index} transform={`translate(${xScale(tickValue)}, 0)`}>
                    <line
                        className={"tick"}
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={innerHeight}>
                    </line>
                    <text
                        key={tickValue}
                        style={{ textAnchor: 'middle' }}
                        x={-3}
                        dy={15}
                        y={innerHeight}>
                        {tickFormat(tickValue)}
                    </text>
                </g>
            ))}
        </>
);
