import csv from 'csv-parser';
import  fs from 'fs';


export default function CSVtoJSON(address) {
    let dataJson = [];

    return new Promise((resolve, reject) => {
        const dataJson = [];

        fs.createReadStream(address)
          .pipe(csv())
          .on('data', (data) => dataJson.push(data))
          .on('end', () => resolve(dataJson))
          .on('error', reject);
    });
}
