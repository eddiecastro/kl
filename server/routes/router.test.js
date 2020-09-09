const router = require("./router");

const request = require("supertest");
const express = require("express");
const app = express();

const errorFormatter = require("../utils/error-formatter");

app.use(express.urlencoded({ extended: false }));

describe("verify routes are applied properly", () => {
  test("Should return status", (done) => {
    router.applyRoutes(app);

    const response = { metadata: { status: "Running" }, data: {} };

    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(response)
      .expect(200, done);
  });

  test("Should return fallback route", (done) => {
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
});
