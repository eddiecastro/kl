import React from "react";
import { render, screen } from "@testing-library/react";

import HomePage from "../homepage";

describe("HomePage component", () => {
  beforeAll(() => {
    // mocking personlist so we dont have to test it here
    jest.mock("../person-list", () => () => <div>PersonList</div>);
    jest.mock("../frequency-list", () => () => <div>FrequencyList</div>);
  });

  it("should render appbar title", async () => {
    render(<HomePage />);
    expect(screen.getByText("Salesloft People")).toBeInTheDocument();
  });
});
