// @flow strict-local
import * as React from "react";
import { Text } from "react-native";
import { ThemeContext } from "../Theme";

type TextProps = {
  color?: string,
  children?: React.Node,
};

export function Title({ color, children }: TextProps): React.Node {
  const theme = React.useContext(ThemeContext);

  return (
    <Text style={[theme.textBase, theme.textTitle, { color }]}>{children}</Text>
  );
}
