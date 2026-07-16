import fs from 'fs';

// data = [
//  ["STRING-TO-REPLACE", "CONTENT"],
//  ["BRAND-NAME", "a brand"],
//  ["BRAND-IMAGE", "url to image"]
// ]

export default function templateParser(orderedData, templatePath) {
    let template = fs.readFileSync(templatePath, "utf-8");

    let out = "";
    let prev = "";
    orderedData.forEach((entry, index) => {
        let processed = template;
        let letterHeader = "";

        const current = entry["Name"][0].toUpperCase();

        if (index == orderedData.length - 1) {
            prev = current;
        }

        // if new letter
        if (current != prev) {
            letterHeader = `
                <div class="letterHeader">
                    <h1 id="${current}">${current}</h1>
                </div>\n`;

            if (index == 0) {
                // dont close any divs
                out = out + letterHeader + "<div class=container>"
            } else {
                out = out + "</div>\n" + letterHeader + "<div class=container>"
            }
            prev = current;
        }

        const dataToReplace = [
            ["BRAND-NAME", entry["Name"]],
            ["BRAND-LOGO", entry["logo url"]]
        ];
        for (const item of dataToReplace) {
            processed = processed.replace(new RegExp(`%%${item[0]}%%`, "g"), item[1]);
        }

        if (index == orderedData.length - 1) {
            // close last container
            processed = processed + "</div>"
        }

        out = out.concat("", processed)
    })

    return out;
}
