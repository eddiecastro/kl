import React from "react";
import { render, screen } from "@testing-library/react";

import ErrorAlert from "../error-alert";
import { FrequencyListError } from "../../utils/error-constants";

describe("ErrorAlert component", () => {
  it("should render error text", () => {
    render(<ErrorAlert errortext={FrequencyListError} />);

    expect(screen.getByText(FrequencyListError)).toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});
