'use strict';

const fs = require('fs');

const file = process.argv[2];
const dataArray = [];

//Reads and modifies data in file passed in from console

fs.readFile(file, (err, data) => {
  if (err) throw err;
  dataArray.push(JSON.parse(data));

  console.log(dataArray);

  modifyData();
  fs.writeFile(file, JSON.stringify(dataArray), (err) => {
    if (err) throw err;
    console.log('Written to file!');
  });
});

function modifyData() {
  dataArray[0].firstName = 'John';
  dataArray[0].lastName = 'Elway';
  dataArray[0].hair.type = 'white';
  dataArray[0].favoriteFoods = 'tacos';
  console.log(dataArray);
}