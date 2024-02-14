interface BackgroundCircleProps {
    centerY: number,
    strokeWidth: number
}

const BackgroundCircle: React.FC<BackgroundCircleProps> = ({ centerY ,strokeWidth}) => {

    return (
        <circle
            r={centerY - strokeWidth / 2}
            fill={"yellow"}
            stroke="black"
            strokeWidth={strokeWidth}/>
    );
};

export default BackgroundCircle;
