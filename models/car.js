class Car {
  constructor(type, year, company) {
    this.type = type;
    this.year = year;
    this.company = company;
  }
  
  getType() {
    return this.type;
  }
  
  getYear() {
    return this.year;
  }
  
  getCompany() {
    return this.company;
  }
  
  setType(type) {
    this.type = type;
  }
  
  setYear(year) {
    this.year = year;
  }
  
  setCompany(company) {
    this.company = company;
  }
}

module.exports = { Car };