import React from "react";
import { render, screen } from "@testing-library/react";

import HomePage from "../homepage";

describe("HomePage component", () => {
  beforeAll(() => {
    jest.mock("../person-list", () => () => <div>PersonList</div>);
    jest.mock("../frequency-list", () => () => <div>FrequencyList</div>);
    jest.mock("../duplicates-list", () => () => <div>DuplicatesList</div>);
  });

  it("should render appbar title", async () => {
    render(<HomePage />);
    expect(screen.getByText("Salesloft People")).toBeInTheDocument();
  });
});
