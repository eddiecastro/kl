import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../homepage";

describe("verifies rendering of homepage component", () => {
  test("root div renders", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("root")).toBeInTheDocument();
  });
});
