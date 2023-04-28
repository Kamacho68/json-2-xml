import fs from 'fs';
import { create } from 'xmlbuilder2';

// Read the JSON file
const jsonContent = fs.readFileSync('input/source.json');

// Parse the JSON content
const jsonObject = JSON.parse(jsonContent);

console.log(jsonObject);

// Create the XML builder object
const xmlBuilder = create();

// Convert the JSON object to XML
const xmlContent = xmlBuilder
    .ele('root')
    .ele(jsonObject)
    .end({ prettyPrint: true });

console.log(xmlContent);

// Write the XML content to a file
fs.writeFileSync('output/source.xml', xmlContent);