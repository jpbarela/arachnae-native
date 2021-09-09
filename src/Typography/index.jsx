// @flow strict-local
import * as React from "react";
import { Text } from "react-native";
import { ThemeContext } from "../Theme";
import { removeUndefined } from "../utils";
import type { TextStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

type TextProps = {
  color?: string,
  children?: React.Node,
};

export function Title({ color, children }: TextProps): React.Node {
  const theme = React.useContext(ThemeContext);

  const dynamicStyle = removeUndefined({ color });

  return (
    <Text style={[theme.textBase, theme.textTitle, dynamicStyle]}>
      {children}
    </Text>
  );
}
