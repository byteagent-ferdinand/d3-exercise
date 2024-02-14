import { ScaleBand, ScaleLinear} from "d3";

interface RectProps {
    data: any[];
    xScale: ScaleLinear<number, number>,
    yScale: ScaleBand<string>,
    xValue: any,
    yValue: any
}

export const Marks: React.FC<RectProps> = ({ data, xScale, yScale, xValue, yValue }) => (
    <>
        {data.map((d, i) => (
            <rect
                className={"mark"}
                key={yValue(d)}
                width={xScale(xValue(d))}
                height={yScale.bandwidth()}
                y={yScale(yValue(d))!}
            ></rect>
        ))}
    </>
);