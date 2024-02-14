import React from "react";
import { ScaleBand } from "d3";

interface AxisLeftProps {
    yScale:  ScaleBand<string>;
}

export const AxisLeft: React.FC<AxisLeftProps> = ({ yScale }) => (
    <>
        {yScale.domain().map(tickValue => (
            <g className="tick">
                <text
                    key={tickValue}
                    style={{textAnchor: 'end'}}
                    x={-3}
                    y={yScale(tickValue)! + yScale.bandwidth() / 1.3}>
                    {tickValue}
                </text>
            </g>

        ))}
    </>
);
