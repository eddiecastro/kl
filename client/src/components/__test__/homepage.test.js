import React from "react";
import { createMount } from "@material-ui/core/test-utils";

import HomePage from "../homepage";

describe("homepage component", () => {
  var mount;

  beforeAll(() => {
    mount = createMount();
  });

  it("should render appbar and title", () => {
    const wrapper = mount(<HomePage />);
    //todo: improve assertion
    expect(wrapper.find("h6").props().children).toEqual(
      "Salesloft Dev Project"
    );
  });

  it("should render personlist", async () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper.find("PersonList").exists()).toBeTruthy();
  });
});
