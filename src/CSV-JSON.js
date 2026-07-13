import csv from 'csv-parser';
import  fs from 'fs';


export function CSVtoJSON(address) {
  const dataJson = [];

fs.createReadStream(address)
  .pipe(csv())
  .on('data', (data) => dataJson.push(data))
  .on('end', () => {
    return dataJson;
    
  });
  
}