import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("root div renders", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("root")).toBeInTheDocument();
});
