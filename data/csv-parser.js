const { Car } = require('./models/car');

let csvData = [];

function readCSV() {
  const fs = require('fs');
  const parse = require('csv-parse');

  fs.readFile('data/data.csv', (err, data) => {
    if (err) {
      console.error(err);
      return [];
    }

    parse(data, (err, output) => {
      if (err) {
        console.error(err);
        return [];
      }

      output.forEach((row) => {
        const [type, year, company] = row;
        csvData.push(new Car(type, year, company));
      });
    });
  });

  return csvData;
}

function writeCSV(cars) {
  const fs = require('fs');
  const { stringify } = require('csv-stringify');

  const csvRows = cars.map((car) => [car.getType(), car.getYear(), car.getCompany()]);

  stringify(csvRows, (err, output) => {
    if (err) {
      console.error(err);
      return;
    }

    fs.writeFile('data/data.csv', output, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
}

module.exports = { readCSV, writeCSV };