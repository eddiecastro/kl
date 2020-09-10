import React from "react";
import { render } from "@testing-library/react";

import PersonList from "../person-list";
import { ENDPOINTS } from "../../config/endpoints";
import { mockFetch, successData } from "../../utils/test-utils";

describe("PersonList component", () => {
  afterAll(() => {
    global.fetch.mockClear();
  });

  it("should render name and detail text", async () => {
    mockFetch(successData, true);

    const { getByText, findByText } = render(<PersonList />);
    await findByText("first last");

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${ENDPOINTS.GET_PEOPLE}?page=1`);
    expect(getByText("first last")).toBeInTheDocument();
    expect(getByText("first last")).toBeInTheDocument();
  });

  it("should render error when call fails", async () => {
    mockFetch({}, false);

    const { getByText, findByText } = render(<PersonList />);
    await findByText("Error");

    expect(getByText("Error")).toBeInTheDocument();
    expect(getByText("Failed to retrieve people —")).toBeInTheDocument();
  });
});
