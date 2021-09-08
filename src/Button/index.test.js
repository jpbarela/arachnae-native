// @flow
import * as React from "react";
import { render } from "@testing-library/react-native";
import { Button } from "./index";

describe("Button", () => {
  it("renders with no style", () => {
    const container = render(<Button title="Press Me" />);
    expect(container).toMatchSnapshot();
  });

  it("renders with link style", () => {
    const container = render(<Button title="Click Me" type="link" />);
    expect(container).toMatchSnapshot();
  });

  it("renders with button style", () => {
    const container = render(<Button title="Press Me" type="button" />);
    expect(container).toMatchSnapshot();
  });
});
