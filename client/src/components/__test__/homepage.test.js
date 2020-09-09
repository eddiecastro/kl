import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../homepage";

describe("homepage component", () => {
  test("should render appbar and title", () => {
    const { getByTestId, getByText } = render(<HomePage />);
    expect(getByTestId("appbar")).toBeInTheDocument();
    expect(getByText("Salesloft Dev Project")).toBeInTheDocument();
  });

  test("should render personlist", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("personlist")).toBeInTheDocument();
  });
});
