import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import DuplicatesList from "../duplicates-list";
import { ENDPOINTS } from "../../config/endpoints";
import { mockFetch, successDuplicateData } from "../../utils/test-utils";
import { DuplicatesListError } from "../../utils/error-constants";

describe("DuplicatesList component", () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it("should render list with data after clicking button", async () => {
    mockFetch(successDuplicateData, true);

    render(<DuplicatesList />);

    fireEvent.click(screen.getByRole("button", { name: "Duplicates" }));

    var frequencyMatchText = await screen.findByText(
      "Matching method: Email frequency comparison"
    );
    expect(frequencyMatchText).toBeInTheDocument();
    expect(
      screen.getByText("Matching method: Local email part")
    ).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(ENDPOINTS.GET_DUPLICATES);

    expect(
      screen.getByText(successDuplicateData.frequencyMatches[0].people[0].name)
    );
    expect(
      screen.getByText(successDuplicateData.frequencyMatches[0].people[1].name)
    );
    expect(
      screen.getByText(successDuplicateData.localPartMatches[0].people[0].name)
    );
    expect(
      screen.getByText(successDuplicateData.localPartMatches[0].people[1].name)
    );
    expect(
      screen.getByText(
        `Character variation: ${successDuplicateData.frequencyMatches[0].variationPercentage}`
      )
    ).toBeInTheDocument();
  });

  it("should render error when button is clicked and call fails", async () => {
    mockFetch({}, false);

    render(<DuplicatesList />);

    fireEvent.click(screen.getByRole("button", { name: "Duplicates" }));

    await screen.findByText("Error");

    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText(DuplicatesListError)).toBeInTheDocument();
  });
});
