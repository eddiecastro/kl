import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import HomePage from "../homepage";

describe("HomePage component", () => {
  beforeAll(() => {
    // mocking personlist so we dont have to test it here
    jest.mock("../person-list", () => () => <div>PersonList</div>);
  });

  it("should render appbar title", async () => {
    const { container, debug, getByText } = render(<HomePage />);
    expect(getByText("Salesloft People")).toBeInTheDocument();
  });

  it("should render personlist ul", async () => {
    const { container, debug, getByText } = render(<HomePage />);
    expect(container.querySelector("ul")).toBeInTheDocument();
  });
});
