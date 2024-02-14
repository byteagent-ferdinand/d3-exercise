import {useEffect, useState} from "react";

interface EyeProps {
    cx: number;
    cy: number;
    eyeRadiusInitial: number
}

const Eye: React.FC<EyeProps> = ({cx, cy, eyeRadiusInitial}) => {

    const [eyeRadius, setEyeRadius] = useState(eyeRadiusInitial);
    const eyeRadiusSmall = eyeRadius;
    const eyeRadiusBig = eyeRadius * 2;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setEyeRadius((prev: any) => (prev === eyeRadiusSmall ? eyeRadiusBig : eyeRadiusSmall));
        }, 2000 );

        return () => clearInterval(intervalId);
    }, []); // Run once on mount


    return <circle className="eye" cx={cx} cy={cy} r={eyeRadius} />;
};

export default Eye;
