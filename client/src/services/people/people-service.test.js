import * as PeopleService from "./people-service";
import api from "../api";

jest.mock("../api");

test("success call", () => {
  const mockResponse = [
    {
      id: 1,
      name: "First Last",
      email: "test@email.com",
      job: "job title",
    },
  ];
  api.get().mockResolvedValue(mockResponse);
  console.log(api);
  expect(PeopleService.getPeople()).toEqual(mockResponse);
});
