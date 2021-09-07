// @flow strict-local
import * as React from "react";
import { StyleSheet } from "react-native";

type ThemeProps = {
  fontFamily: string,
};

export function createTheme(theme: ThemeProps) {
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

export const ThemeContext = React.createContext(createTheme({}));

export function ThemeProvider({
  theme,
  children,
}: {
  theme: ThemeProps,
  children: React.Node,
}) {
  const themeStyleSheet = createTheme(theme);

  return (
    <ThemeContext.Provider value={themeStyleSheet}>
      {children}
    </ThemeContext.Provider>
  );
}
