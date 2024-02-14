import React from "react";
import { line, ScaleLinear, ScaleTime } from "d3";

interface LineProps {
    data: any[];
    xScale: ScaleTime<number, number>;
    yScale: ScaleLinear<number, number>;
    xValue: any;
    yValue: any;
}

export const Marks: React.FC<LineProps> = ({ data, xScale, yScale, xValue, yValue }) => {
    const lineGenerator = line()
        .x(d => xScale(xValue(d)) || 0)
        .y(d => yScale(yValue(d)))
        .defined(d => xScale(xValue(d)) !== null);

    // Erstellen des Pfades für die Linie
    const path = lineGenerator(data) || "";

    return (
        <>
            {/* Zeichnen der Linie */}
            <path
                d={path}
                className="mark"
                fill="None"
                stroke="black"/>

            {/* Zeichnen der Punkte */}
            {data.map((d, i) => (
                <circle
                    key={i}
                    className="mark"
                    cx={xScale(xValue(d))}
                    cy={yScale(yValue(d))}
                    r={5}
                />
            ))}
        </>
    );
};
