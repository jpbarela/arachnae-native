// @flow strict-local
import * as React from "react";
import { StyleSheet } from "react-native";
import type { TextStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

type ThemeProps = {
  fontFamily: string,
};

type Theme = {
  textBase: TextStyleProp,
  textTitle: TextStyleProp,
};

export function createTheme(theme: ThemeProps): Theme {
  return StyleSheet.create({
    textBase: {
      fontFamily: theme.fontFamily || "arial",
    },
    textTitle: {
      fontWeight: "bold",
      fontSize: 48,
    },
  });
}

export const ThemeContext: React.Context<Theme> = React.createContext(
  createTheme({})
);

export function ThemeProvider({
  theme,
  children,
}: {
  theme: ThemeProps,
  children: React.Node,
}): React.Node {
  const themeStyleSheet = createTheme(theme);

  return (
    <ThemeContext.Provider value={themeStyleSheet}>
      {children}
    </ThemeContext.Provider>
  );
}
