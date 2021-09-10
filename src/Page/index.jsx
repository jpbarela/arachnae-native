// @flow
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeContext } from "../Theme";

export function Page({ children }: { children?: React.Node }): React.Node {
  const theme = React.useContext(ThemeContext);

  return (
    <View style={[styles.outer, theme.backgroundColor]}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  outer: {
    width: "100%",
    height: "100%",
  },
});
