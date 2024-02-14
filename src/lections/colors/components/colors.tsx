import './colors.css';
import {arc, csv, DefaultArcObject, DSVRowArray, pie} from 'd3';
import React, { useEffect, useState } from 'react';
const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv';

const Colors: React.FC = () => {
    const [data, setData] = useState<DSVRowArray<string> | null>(null);

    const width = 960;
    const height = 500;
    const centerX = width/2;
    const centerY = height/2;
    const pieRadius = 50;
    const pieWidth = 200;

    useEffect(() => {
        csv(csvUrl).then((csvData) => {
            setTimeout(() => {
                setData(csvData);
                console.log(csvData);
            }, 2000);
        });
    }, [csvUrl]);

    const pieArc: any = arc<DefaultArcObject>()
        .innerRadius(0)
        .outerRadius(pieWidth)

    return (
        <div>
            <svg width={width} height={height}>
                <g transform={`translate(${centerX}, ${centerY})`}>
                    {data ? (
                        data.map((d, i) => (
                            <path
                                key={i}
                                fill={d['RGB hex value']}
                                d={pieArc({
                                    startAngle: i /data.length * 2 * Math.PI,
                                    endAngle: (i+1) /data.length * 2 * Math.PI
                                }) || ''}
                            ></path>
                        ))
                    ) : null}
                </g>
            </svg>
        </div>
    );
};

export default Colors;
