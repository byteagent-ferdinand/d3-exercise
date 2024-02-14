import {useEffect, useState} from 'react';
import './../smiley-face.css';
import BackgroundCircle from "./background-circle";
import Eye from "./eye";
import Mouth from "./mouth";


interface SmileyFaceProps {
    width: number,
    height: number,
    centerX: number,
    centerY: number,
    eyeOffsetX: number,
    eyeOffsetY: number,
    eyeRadiusInitial: number,
    mouthRadius: number,
    mouthWidth: number,
    strokeWidth: number
}

const SmileyFace: React.FC<SmileyFaceProps> = (
    {
        width,
        height,
        centerX,
        centerY,
        eyeOffsetX,
        eyeOffsetY,
        eyeRadiusInitial,
        mouthRadius,
        mouthWidth,
        strokeWidth
    }) => {

        return (
            <svg className="smiley-face" width={width} height={height}>
                <g transform={`translate(${centerX}, ${centerY})`}>
                    <BackgroundCircle centerY={centerY} strokeWidth={strokeWidth}/>
                    <Eye cx={-eyeOffsetX} cy={-eyeOffsetY} eyeRadiusInitial={eyeRadiusInitial}/>
                    <Eye cx={eyeOffsetX} cy={-eyeOffsetY} eyeRadiusInitial={eyeRadiusInitial}/>
                    <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>
                </g>
            </svg>
        );
    };

export default SmileyFace;
