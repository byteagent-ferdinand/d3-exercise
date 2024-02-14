import { ScaleBand, ScaleLinear} from "d3";

interface RectProps {
    data: any[];
    xScale: ScaleLinear<number, number>,
    yScale: ScaleLinear<number, number>,
    xValue: any,
    yValue: any
}

export const Marks: React.FC<RectProps> = ({ data, xScale, yScale, xValue, yValue }) => (
    <>
        {data.map((d, i) => (
            <circle
                className={"mark"}
                cx={xScale(xValue(d))}
                cy={yScale(yValue(d))}
                r={10}/>


        ))}

    </>
);