import {useEffect, useState} from "react";
import {csv, DSVRowArray} from "d3";

export const useData = () => {
    const csvUrl =
        `
        https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv
        `;

    const [data, setData] = useState<DSVRowArray<string> | null>(null);

    useEffect(() => {
        const row = (d: any) => {
            d.sepal_length = +d.sepal_length;
            d.sepal_width = +d.sepal_width;
            d.petal_length = +d.petal_length;
            d.petal_width = +d.petal_width;
            return d;
        };

        csv(csvUrl, row).then((csvData) => {
            setTimeout(() => {
                // Ensure that the type of csvData matches the state type
                setData(csvData as DSVRowArray<string>);
            }, 1000);
        });
    }, [csvUrl]);

    return data;
}