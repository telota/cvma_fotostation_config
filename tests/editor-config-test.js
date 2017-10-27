import test from 'ava';

const fs = require('fs');
const path = require('path');
const { DOMParser } = require('xmldom');

const has = Object.prototype.hasOwnProperty;

test.beforeEach((t) => {
  const filePath = path.resolve(__dirname, '../config/Shared/Metadata/MetadataConfiguration.xml');
  const configFile = fs.readFileSync(filePath).toString();

  const parser = new DOMParser();
  t.context.metadataConfiguration = parser.parseFromString(configFile);
});


// see #8965
test('it does not have unnecessary fields in the configuration file', (t) => {
  const unnecessaryFields = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'unnecessary-fields.json')));
  const fields = t.context.metadataConfiguration.getElementsByTagName('Field');

  for (let counter = 0; counter < fields.length; counter += 1) {
    const fieldId = fields[counter].getAttribute('id');
    t.false(has.call(unnecessaryFields, fieldId));
  }
});


// see #8965
test('it contains only necessary fields in the configuration file', (t) => {
  const necessaryFields = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'metadata-fields-in-use.json'))).fields;
  const fields = t.context.metadataConfiguration.getElementsByTagName('Field');

  for (let counter = 0; counter < fields.length; counter += 1) {
    const fieldId = parseInt(fields[counter].getAttribute('id'), 10);
    t.true(necessaryFields.includes(fieldId));
  }
});

// see #8965
test('it does not contain unnecessary fields in the search bar', (t) => {
  const unnecessaryFields = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'unnecessary-fields.json')));

  const parser = new DOMParser();
  const metadataList = parser.parseFromString(fs.readFileSync(path.resolve('__dirname', '../config/Win/Backup/BaseConfiguration/fsMetaPopupLists.xml')).toString());

  const fieldList = metadataList.getElementsByTagName('Array')[0];

  const fields = fieldList.getElementsByTagName('Int');

  for (let counter = 0; counter < fields.length; counter += 1) {
    const fieldId = fields[counter].textContent;
    t.false(has.call(unnecessaryFields, fieldId));
  }
});

// see #8966
test('the iconclass notation quick list is empty', (t) => {
  const quickList = fs.readFileSync(path.resolve('__dirname', '../config/Win/Backup/Metadata/Quick Lists/ql_507.txt')).toString();
  t.true(quickList.length < 1);
});
