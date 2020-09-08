module.exports = class PersonModel {
  constructor(id, name, email, job) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.job = job;
  }

  getDetailText() {
    return this.job + " - " + this.email;
  }
};
