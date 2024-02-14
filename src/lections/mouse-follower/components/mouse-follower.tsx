import React, {useState, useCallback} from 'react';
const MouseFollower: React.FC = () => {

    const width = 960;
    const height = 500;
    const circleX = width/2;
    const circleY = height/2;
    const circleRadius = 30;

    const [position, setPosition] = useState({ x: circleX, y: circleY });

    const handleMouseMove = useCallback((e: any) => {
        setTimeout(() => {
            setPosition({ x: e.clientX, y: e.clientY });
        }, 100);
    }, [setPosition]);

    return (
        <svg width={width} height={height} onMouseMoveCapture={handleMouseMove}>
            <circle
                cx={position.y}
                cy={position.x}
                r={circleRadius}/>
        </svg>
    );
};

export default MouseFollower;
