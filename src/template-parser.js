import fs from 'fs';

// data = [
//  ["STRING-TO-REPLACE", "CONTENT"],
//  ["BRAND-NAME", "a brand"],
//  ["BRAND-IMAGE", "url to image"]
// ]

function templateParser(data, templatePath) {
    let replaced = fs.readFile(templatePath, "utf-8", (err, template) => {
        if (err) {
            console.error("Error reading file:", err);
        }

        for (const item of data) {
            template = template.replace(new RegExp(item[0], "g"), item[1]);
        }

        return template;
    });

    return replaced;
}

const replaced = templateParser([["BRAND-NAME", "Pasta place"], ["BRAND-LOGO", "something"]], "../templates/brand.html")

console.log("E")
console.log(replaced);

export default templateParser;
