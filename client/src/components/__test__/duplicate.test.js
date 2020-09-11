import React from "react";
import { render, screen } from "@testing-library/react";

import Duplicate from "../duplicate";

const duplicateData = {
  people: [
    {
      id: 1,
      name: "first last",
      detail: "email@address.com - job title",
    },
    {
      id: 1,
      name: "abc dev",
      detail: "another@another - title",
    },
  ],
  matchingMethod: "Email character frequency",
  variationPercentage: "9 %",
};

describe("Duplicate component", () => {
  it("should render names, detail texts, matching method and variation", () => {
    render(<Duplicate duplicate={duplicateData} />);

    expect(screen.getByText(duplicateData.people[0].name)).toBeInTheDocument();
    expect(screen.getByText(duplicateData.people[1].name)).toBeInTheDocument();
    expect(
      screen.getByText(duplicateData.people[0].detail)
    ).toBeInTheDocument();
    expect(
      screen.getByText(duplicateData.people[1].detail)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Matching method: ${duplicateData.matchingMethod}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `Character variation: ${duplicateData.variationPercentage}`
      )
    ).toBeInTheDocument();
  });
});
