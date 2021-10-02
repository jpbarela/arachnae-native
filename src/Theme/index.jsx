// @flow strict-local
import * as React from "react";
import { StyleSheet } from "react-native";
import type {
  TextStyle,
  ViewStyleProp,
} from "react-native/Libraries/StyleSheet/StyleSheet";
import { definedNonEmptyString } from "../utils";

type ThemeProps = {
  backgroundColor?: string,
  fontFamily?: string,
  primaryColor?: string,
};

type Theme = {
  backgroundColor: ViewStyleProp,
  borderColor: ViewStyleProp,
  textBase: TextStyle,
};

const textBase = (theme: ThemeProps) => ({
  color: definedNonEmptyString(theme.primaryColor)
    ? theme.primaryColor
    : "black",
  fontFamily: definedNonEmptyString(theme.fontFamily)
    ? theme.fontFamily
    : "arial",
  fontSize: 28,
});

export function createTheme(theme: ThemeProps): Theme {
  return StyleSheet.create({
    backgroundColor: {
      backgroundColor: definedNonEmptyString(theme.backgroundColor)
        ? theme.backgroundColor
        : "white",
    },
    borderColor: {
      borderColor: definedNonEmptyString(theme.primaryColor)
        ? theme.primaryColor
        : "black",
    },
    textBase: textBase(theme),
  });
}

export const ThemeContext: React.Context<Theme> = React.createContext(
  createTheme({ primaryColor: "black" })
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

export const useTheme: () => Theme = () => React.useContext(ThemeContext);
