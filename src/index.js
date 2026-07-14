import fs from "fs";

import CSVtoJSON from "./CSV-JSON.js";
import templateParser from "./template-parser.js";
import quickSort from "./quickSort.js"

const data = await CSVtoJSON("./data.csv")

const orderedData = quickSort(data);
const templates = templateParser(orderedData, "../templates/brand.html")

const html = `
<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="./styles/styles.css">
</head>
<body>
    //Could use buttons or links, instead of src="url", src=hashthen ID(IDK how to do hash on my keyboard). Already made id of  each title as the letter
    <div id="searchbar"></div>
    <div style="align-items: center; justify-content: center; display: grid;">
        ${templates}
    </div>
</body>
`

fs.writeFile("../index.html", html, err => {
    if (err) {
        console.error(err);
    }
});

