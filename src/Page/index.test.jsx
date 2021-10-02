// @flow
import * as React from "react";
import { render } from "@testing-library/react-native";
import { Page } from "./index";

describe("Page", () => {
  it("renders", () => {
    const container = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
