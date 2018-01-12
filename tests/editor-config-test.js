import test from 'ava';

const fs = require('fs');
const path = require('path');
const { DOMParser } = require('xmldom');

const has = Object.prototype.hasOwnProperty;

function readQuickList(fieldId) {
  return fs.readFileSync(path.resolve('__dirname', `../config/Win/Backup/Metadata/Quick Lists/ql_${fieldId}.txt`)).toString().trim();
}

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
  const quickList = readQuickList(507);
  t.is(0, quickList.length);
});

// #see #8967
test('the Rechteinhaber field only contains the correct suggestions', (t) => {
  const quickList = readQuickList(319);
  t.is('CVMA Deutschland/Potsdam', quickList);
});

// #see #8967
test('the Herausgeber field only contains the correct suggestions', (t) => {
  const quickList = readQuickList(526);
  t.is('CVMA Potsdam - http://www.corpusvitrearum.de/', quickList);
});

// see #8967
test('the Rechtenennung field only contains the correct suggestions', (t) => {
  const quickList = readQuickList(110);
  t.is('CVMA Deutschland Potsdam/Berlin-Brandenburgische Akademie der Wissenschaften, Foto: Holger Kupfer', quickList);
});

// see #8967
test('the Lizenzinformation (Typ) field only contains the correct suggestions', (t) => {
  const quickList = readQuickList(315);
  t.is('CC BY-NC 4.0', quickList);
});

// see #8967
test('the Lizenzinformation (URL) field only contains the correct suggestions', (t) => {
  const quickList = readQuickList(316);
  t.is('http://creativecommons.org/licenses/by-nc/4.0/', quickList);
});

// see #9346
test('the Kontinent field contains only Europe as a suggestion', (t) => {
  const quickList = readQuickList(531);
  t.is(1, quickList.split('\n').length);
  t.true(quickList.includes('Europa'));
});

// see #8967
test('the Land field contains no suggestions', (t) => {
  const quickList = readQuickList(532);
  t.is(0, quickList.length);
});

// see #9347
test('the Bundesland_Region field contains all German Bundesländer', (t) => {
  const quickList = readQuickList(533);
  t.is(16, quickList.split('\n').length);
});

// see #8967
test('the Stadt field contains no suggestions', (t) => {
  const quickList = readQuickList(569);
  t.is(0, quickList.length);
});

// see #8967
test('the Gebaeude field contains no suggestions', (t) => {
  const quickList = readQuickList(535);
  t.is(0, quickList.length);
});

// see #8967
test('the Gebaeudeteil field contains no suggestions', (t) => {
  const quickList = readQuickList(512);
  t.is(0, quickList.length);
});

// see #8969
test('the detail list view contains all necessary fields', (t) => {
  const wantedFields = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'fields-in-detail-list-view.json'))).fields;
  
  const parser = new DOMParser();
  const viewDescription = parser.parseFromString(fs.readFileSync(path.resolve(__dirname, '../config/Win/Backup/BaseConfiguration/fsViewData.xml')).toString());

  const detailListGroup = viewDescription.getElementsByTagName('Group')[2];
  const fieldList = detailListGroup.getElementsByTagName('Struct');

  // Skip first entry since it is about fonts, not fields
  for (let counter = 1; counter < fieldList.length; counter += 1) {
    const currentField = parseInt(fieldList[counter].getElementsByTagName('Int')[0].textContent, 10);
    t.true(wantedFields.includes(currentField));
  }
});

// see #9065 
test('the search can access all allowed fields', (t) => {
  const allFields = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'metadata-fields-in-use.json'))).fields;

  const parser = new DOMParser();
  const metadataList = parser.parseFromString(fs.readFileSync(path.resolve('__dirname', '../config/Win/Backup/BaseConfiguration/fsMetaPopupLists.xml')).toString());

  const fieldList = metadataList.getElementsByTagName('Array')[0];
  const fields = fieldList.getElementsByTagName('Int');
  const fieldsInSearch = [];

  for (let counter = 0; counter < fields.length; counter += 1) {
    const fieldId = fields[counter].textContent;
    fieldsInSearch.push(parseInt(fieldId, 10));
  }

  allFields.forEach((field) => {
    t.true(fieldsInSearch.includes(field));
  });
});

// see #9343
test('the aufnahmeart field contains all 12 values', (t) => {
  const quickList = readQuickList(514);
  t.is(12, quickList.split('\n').length);
});

// see #9344
test('the name des fensters field does not contain a tester value', (t) => {
  const quickList = readQuickList(525);
  t.false(quickList.includes('Tester'));
  t.true(quickList.includes('Christusfenster'));
});

// see #9345
test('the gattung field has corrected values', (t) => {
  const quickList = readQuickList(524);
  t.false(quickList.includes('Goldschmiedekunst'));
  t.false(quickList.includes('Tafelmalerei'));
  t.false(quickList.includes('Tapisserie'));
  t.true(quickList.includes('Malerei'));
});
