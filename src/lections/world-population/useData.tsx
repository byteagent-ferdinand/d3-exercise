import {useEffect, useState} from "react";
import {csv, DSVRowArray} from "d3";

export const useData = () => {
    const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
    const [data, setData] = useState<DSVRowArray<string> | null>(null);

    useEffect(() => {
        const row = (d: any) => {
            d.Population = +d['2020'] * 1000;
            console.log(d.Population);
            return d;
        };

        csv(csvUrl, row).then((csvData) => {
            setTimeout(() => {
                // Ensure that the type of csvData matches the state type
                setData(csvData.slice(0, 20) as DSVRowArray<string>);
                console.log(csvData);
            }, 1000);
        });
    }, [csvUrl]);

    return data;
}