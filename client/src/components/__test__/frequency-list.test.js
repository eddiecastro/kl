import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import FrequencyList from "../frequency-list";
import { ENDPOINTS } from "../../config/endpoints";
import { mockFetch, successFrequencyData } from "../../utils/test-utils";
import { FrequencyListError } from "../../utils/error-constants";

describe("FrequencyList component", () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it("should render table headers and data after clicking button", async () => {
    mockFetch(successFrequencyData, true);

    render(<FrequencyList />);

    fireEvent.click(screen.getByRole("button", { name: "Frequency" }));

    await screen.findByText("Character");

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(ENDPOINTS.GET_FREQUENCY);
    var firstRow = screen.getByRole("row", { name: "a 1" });
    expect(firstRow).toBeInTheDocument();
    var secondRow = screen.getByRole("row", { name: "b 2" });
    expect(secondRow).toBeInTheDocument();
  });

  it("should render error when button is clicked and call fails", async () => {
    mockFetch({}, false);

    render(<FrequencyList />);

    fireEvent.click(screen.getByRole("button", { name: "Frequency" }));

    await screen.findByText("Error");

    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText(FrequencyListError)).toBeInTheDocument();
  });
});
