// Model class mirroring the structure of the Saleslot standard API response
module.exports = class Response {
  constructor(metadata, data) {
    this.metadata = metadata;
    this.data = data;
  }
};
