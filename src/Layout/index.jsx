// @flow
import * as React from "react";
import { StyleSheet, View } from "react-native";
import type { TextStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

type RowProps = {
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly",
  alignItems: "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
  children?: React.Node,
};

export function Row({
  alignItems,
  justifyContent,
  children,
}: RowProps): React.Node {
  return (
    <View style={[styles.row, { alignItems, justifyContent }]}>{children}</View>
  );
}

Row.defaultProps = {
  alignItems: "flex-start",
  justifyContent: "space-between",
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
  },
});
