module.exports = class PersonModel {
  constructor(name, email, job) {
    this.name = name;
    this.email = email;
    this.job = job;
  }

  getDetailText() {
    return this.job + " - " + this.email;
  }
};
