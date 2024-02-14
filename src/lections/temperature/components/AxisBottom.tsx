import React from "react";
import { ScaleTime, timeWeek } from "d3";

interface AxisBottomProps {
    xScale: ScaleTime<number, number>;
    innerHeight: number;
    tickFormat: any;
}

export const AxisBottom: React.FC<AxisBottomProps> = ({ xScale, innerHeight, tickFormat }) => {
    const ticks = xScale.ticks(); // Verwende die Standardanzahl von Ticks
    return (
        <>
            {/*<g className={"tick"}>
                <line className={"tick"} x1={0} y1={0} x2={0} y2={innerHeight}></line>
            </g>*/}
            {ticks.map((tickValue, index) => (
                <g className={"tick"} key={index} transform={`translate(${xScale(tickValue)}, 0)`}>
                    <line className={"tick"} x1={0} y1={0} x2={0} y2={innerHeight}></line>
                    <text
                        key={index}
                        style={{ textAnchor: 'middle' }}
                        x={-3}
                        dy={15}
                        y={innerHeight}>
                        { index % 2 == 0 && tickFormat(tickValue)}
                    </text>
                </g>
            ))}
        </>
    );
};
