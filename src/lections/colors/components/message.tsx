import {csvFormat} from "d3";

export const message = (data: any) => {
    let message = '';
    message += Math.round(csvFormat(data).length / 1024) + ' kB<br/>';
    message += data.length + ' rows<br/>';
    message += data.columns.length + ' columns<br/>';
    return message;
};
