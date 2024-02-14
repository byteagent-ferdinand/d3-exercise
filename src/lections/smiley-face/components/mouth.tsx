import React from 'react';
import { arc, DefaultArcObject } from 'd3';

interface MouthProps {
    mouthRadius: number;
    mouthWidth: number;
}

const Mouth: React.FC<MouthProps> = ({ mouthRadius, mouthWidth }) => {

    const mouthArc: any = arc<DefaultArcObject>()
        .innerRadius(mouthRadius)
        .outerRadius(mouthWidth + mouthRadius)
        .startAngle(Math.PI * 1.5)
        .endAngle(Math.PI * 0.5);

    return <path d={mouthArc() || ''} />;
};

export default Mouth;
