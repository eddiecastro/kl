import React from "react";
import { render, screen } from "@testing-library/react";

import PersonList from "../person-list";
import { ENDPOINTS } from "../../config/endpoints";
import { mockFetch, successPeopleData } from "../../utils/test-utils";
import { PersonListError } from "../../utils/error-constants";

describe("PersonList component", () => {
  afterAll(() => {
    global.fetch.mockClear();
  });

  it("should render name and detail text", async () => {
    mockFetch(successPeopleData, true);

    render(<PersonList />);
    await screen.findByText("first last");

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${ENDPOINTS.GET_PEOPLE}?page=1`);
    expect(screen.getByText("first last")).toBeInTheDocument();
    expect(screen.getByText("first last")).toBeInTheDocument();
  });

  it("should render error when call fails", async () => {
    mockFetch({}, false);

    render(<PersonList />);
    await screen.findByText("Error");

    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText(PersonListError)).toBeInTheDocument();
  });
});
