// @flow
import * as React from "react";
import { render } from "@testing-library/react-native";
import { Title } from "./index";

test("Body renders", () => {
  const container = render(<Title>My Title</Title>);

  expect(container).toMatchSnapshot();
});

test("Title renders", () => {
  const container = render(<Title>My Title</Title>);

  expect(container).toMatchSnapshot();
});
