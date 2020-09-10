import React from "react";
import { render } from "@testing-library/react";

import Person from "../person";

const personData = {
  id: 1,
  name: "first last",
  detail: "email@address.com - job title",
};

describe("Person component", () => {
  it("should render name, detail text, and avatar", () => {
    const { container, debug, getByText } = render(
      <Person person={personData} />
    );

    expect(getByText(personData.name)).toBeInTheDocument();
    expect(getByText(personData.detail)).toBeInTheDocument();
    expect(container.querySelector("div.MuiAvatar-root")).toBeInTheDocument();
    console.log(debug());
  });
});
