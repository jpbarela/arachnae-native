// @flow
import * as React from "react";
import { render } from "@testing-library/react-native";
import { Row } from "./index";

test("Row renders", () => {
  const container = render(<Row heightFlex={1} />);

  expect(container).toMatchSnapshot();
});
