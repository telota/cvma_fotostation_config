import test from 'ava';
const fs = require('fs');
const path = require('path');
const DOMParser = require('xmldom').DOMParser;

let metadataConfiguration;

test.before(t => {

    const filePath = path.resolve(__dirname, "../config/Shared/Metadata/MetadataConfiguration.xml");
    const metadataConfigurationFile = fs.readFileSync(filePath).toString();

    const parser = new DOMParser();
    metadataConfiguration = parser.parseFromString(metadataConfigurationFile);

});

// see #8965
test('it does not have unnecessary fields in the search drop down menu', t => {
    
    const unnecessaryFields = JSON.parse(fs.readFileSync(path.resolve(__dirname, "unnecessary-fields.json")));
    const fields = metadataConfiguration.getElementsByTagName("Field");

    for (let counter = 0; counter < fields.length; counter++) {
        let fieldId = fields[counter].getAttribute("id");
        t.false(unnecessaryFields.hasOwnProperty(fieldId));
    }

});

// see #8965
test('it contains only necessary fields in the search drop down menu', t => {
    
    const necessaryFields = JSON.parse(fs.readFileSync(path.resolve(__dirname, "metadata-fields-in-use.json"))).fields;
    const fields = metadataConfiguration.getElementsByTagName("Field");

    for (let counter = 0; counter < fields.length; counter++) {
        let fieldId = parseInt(fields[counter].getAttribute("id"));
        t.true(necessaryFields.includes(fieldId));
    }

});
