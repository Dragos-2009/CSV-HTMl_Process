import fs from "fs";

import CSVtoJSON from "./CSV-JSON.js";
import templateParser from "./template-parser.js";
import quickSort from "./quickSort.js"

const data = await CSVtoJSON("./data.csv")

let nameArr = [];
data.forEach((entry, i) => {
    nameArr.push([entry.Name, i]);
})

nameArr = [...quickSort(nameArr)];

let orderedData = [];
nameArr.forEach((entry, i) => {
    orderedData.push(data[entry[1]])
})

let templates = "";

for (const entry of orderedData) {
    const toReplace = [
        ["BRAND-NAME", entry["Name"]],
        ["BRAND-LOGO", entry["logo url"]]
    ];
    const replaced = templateParser(toReplace, "../templates/brand.html");
    templates = templates.concat("", replaced);
}

const html = `
<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="./styles/styles.css">
</head>
<body>
    <table>
        ${templates}
    </table>
</body>
`

fs.writeFile("../index.html", html, err => {
    if (err) {
        console.error(err);
    }
});

