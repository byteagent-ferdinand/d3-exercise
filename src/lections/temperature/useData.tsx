import {useEffect, useState} from "react";
import {csv, DSVRowArray} from "d3";

export const useData = () => {
    const csvUrl =
        `
        https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv
        `;
    const [data, setData] = useState<DSVRowArray<string> | null>(null);

    useEffect(() => {
        const row = (d: any) => {
            d.temperature = +d.temperature;
            d.timestamp = new Date(d.timestamp);
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