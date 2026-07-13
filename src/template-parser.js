import fs from 'fs';

// data = [
//  ["STRING-TO-REPLACE", "CONTENT"],
//  ["BRAND-NAME", "a brand"],
//  ["BRAND-IMAGE", "url to image"]
// ]

function templateParser(data, templatePath) {
    let template = fs.readFileSync(templatePath, "utf-8", (err, template) => {
        if (err) {
            console.error("Error reading file:", err);
        }
        return template;
    });

    for (const item of data) {
        template = template.replace(new RegExp(`%%${item[0]}%%`, "g"), item[1]);
    }

    return template;
}

export default templateParser;
