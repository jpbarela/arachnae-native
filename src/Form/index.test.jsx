// @flow
import * as React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { NumericInput } from "./index";

describe("NumericInput", () => {
  test("renders", () => {
    const container = render(<NumericInput />);
    expect(container).toMatchSnapshot();
  });

  test("returns a numeric input", () => {
    const changeHandler = jest.fn();
    const placeholderText = "Test numeric conversion";

    const { getByPlaceholderText } = render(
      <NumericInput placeholder={placeholderText} onChange={changeHandler} />
    );

    const input = getByPlaceholderText(placeholderText);
    fireEvent(input, "onEndEditing", { nativeEvent: { text: "23" } });

    expect(changeHandler.mock.calls[0][0]).toBe(23);
  });
});
