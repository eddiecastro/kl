const request = require("supertest");
const express = require("express");
const app = express();

const router = require("../router");
const peopleService = require("../../services/people/people-service");
const frequencyService = require("../../services/frequency/frequency-service");
const duplicatesService = require("../../services/duplicates/duplicates-service");
const { goodData } = require("../../utils/test-utils");

app.use(express.urlencoded({ extended: false }));

describe("router test", () => {
  const frequencyData = {
    a: 1,
    b: 3,
    z: 4,
  };

  const duplicatesData = {
    localPartMatches: ["local part matches"],
    frequencyMatches: ["frequency matches"],
  };

  beforeAll(() => {
    peopleService.get = jest.fn(async () => goodData);
    frequencyService.get = jest.fn(async () => frequencyData);
    duplicatesService.get = jest.fn(async () => duplicatesData);
  });

  it("Should return basic status", (done) => {
    router.applyRoutes(app);

    const response = { metadata: { status: "Running" }, data: {} };

    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(response)
      .expect(200, done);
  });

  it("Should return fallback route", (done) => {
    router.applyRoutes(app);

    const response = {
      metadata: { error: "Request failed - reason: Not found" },
      data: {},
    };

    request(app)
      .get("/blah")
      .expect("Content-Type", /json/)
      .expect(response)
      .expect(404, done);
  });

  it("Should return people response", (done) => {
    const response = goodData;

    request(app)
      .get("/people")
      .expect("Content-Type", /json/)
      .expect(response)
      .expect(200, done);
  });

  it("Should return frequency response", (done) => {
    const response = frequencyData;

    request(app)
      .get("/frequency")
      .expect("Content-Type", /json/)
      .expect(response)
      .expect(200, done);
  });

  it("Should return duplicates response", (done) => {
    const response = duplicatesData;

    request(app)
      .get("/duplicates")
      .expect("Content-Type", /json/)
      .expect(response)
      .expect(200, done);
  });
});
