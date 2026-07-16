import fs from "fs";

import CSVtoJSON from "./CSV-JSON.js";
import templateParser from "./template-parser.js";
import quickSort from "./quickSort.js"

const data = await CSVtoJSON("./data.csv")

const orderedData = quickSort(data);
const brandTemplates = templateParser(orderedData, "../templates/brand.html")

const sidebarLinks = () => {
    let links = "";
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i);
        links += `<li><a href=#${letter} class="btn">${letter}</a></li>\n`;
    }
    return links;
}

const html = `
<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="./styles/styles.css">
</head>
<body>
    <ul class="searchbar">
        ${sidebarLinks()}
    </ul>
    <div style="align-items: center; justify-content: center; display: grid; margin-top:20px">
        ${brandTemplates}
    </div>
</body>
`

fs.writeFile("../index.html", html, err => {
    if (err) {
        console.error(err);
    }
});

