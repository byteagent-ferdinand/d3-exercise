import React from 'react';
import SmileyFace from "./components/smiley-face";
import {range} from "d3";
const SmileyFaceContainer: React.FC = () => {


    const width = 400;
    const height = 200;
    const centerX = width / 2;
    const centerY = height / 2;

    const strokeWidth = 10;

    const array = range(9);
    return (
        <>
            {array.map((i: number) => (
                <SmileyFace
                    key={i} // Don't forget to add a unique key when mapping over an array in React
                    width={width}
                    height={height}
                    centerX={centerX}
                    centerY={centerY}
                    eyeOffsetX={15 + Math.random() * 15}
                    eyeOffsetY={25 + Math.random() * 25}
                    eyeRadiusInitial={5 + Math.random() * 5}
                    mouthRadius={15 + Math.random() * 15}
                    mouthWidth={5 + Math.random() * 5}
                    strokeWidth={strokeWidth}/>
            ))}
        </>
    );
};

export default SmileyFaceContainer;
