const { readCSV, writeCSV } = require('./data/csv-parser');
const { Car } = require('./models/car');

let storage = [];

function initStorage() {
  storage = readCSV();
}

function readStorage() {
  return storage;
}

function writeStorage(cars) {
  storage = cars;
  writeCSV(storage);
}

initStorage();

module.exports = { initStorage, readStorage, writeStorage };