// Model class reducing the size of the api response to only the required fields
module.exports = class PersonModel {
  constructor(id, first_name, last_name, email_address, title) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email_address = email_address;
    this.title = title;
  }
};
