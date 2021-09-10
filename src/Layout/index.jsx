// @flow
import * as React from "react";
import { StyleSheet, View } from "react-native";
import type {
  TextStyleProp,
  ViewStyleProp,
} from "react-native/Libraries/StyleSheet/StyleSheet";

type RowProps = {
  alignItems: "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
  heightFlex: number,
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly",
  paddingRight?: number,
  children?: React.Node,
};

export function Row({
  alignItems,
  heightFlex,
  justifyContent,
  paddingRight,
  children,
}: RowProps): React.Node {
  const dynamicStyle = paddingRight ? { paddingRight: paddingRight + 30 } : {};

  return (
    <View style={[styles.rowOuter, { flex: heightFlex }, dynamicStyle]}>
      <View style={[styles.rowInner, { alignItems, justifyContent }]}>
        {children}
      </View>
    </View>
  );
}

Row.defaultProps = {
  alignItems: "flex-start",
  justifyContent: "space-between",
};

const styles = StyleSheet.create({
  rowOuter: {
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
  },
  rowInner: {
    flex: 1,
    flexDirection: "row",
  },
});
