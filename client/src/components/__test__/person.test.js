import React from "react";
import { render, screen } from "@testing-library/react";

import Person from "../person";

const personData = {
  id: 1,
  name: "first last",
  detail: "email@address.com - job title",
};

describe("Person component", () => {
  it("should render name, detail text", () => {
    render(<Person person={personData} />);

    expect(screen.getByText(personData.name)).toBeInTheDocument();
    expect(screen.getByText(personData.detail)).toBeInTheDocument();
  });
});
