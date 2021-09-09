// @flow
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeContext } from "../Theme";

export function Page({ children }: { children?: React.Node }): React.Node {
  const theme = React.useContext(ThemeContext);

  return <View style={theme.page}>{children}</View>;
}
