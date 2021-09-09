// @flow strict-local
import * as React from "react";
import { StyleSheet } from "react-native";
import type {
  TextStyleProp,
  ViewStyleProp,
} from "react-native/Libraries/StyleSheet/StyleSheet";

type ThemeProps = {
  backgroundColor?: string,
  fontFamily?: string,
  primaryColor?: string,
};

type Theme = {
  buttonBase: ViewStyleProp,
  buttonLabelLink: TextStyleProp,
  page: ViewStyleProp,
  textBase: TextStyleProp,
  textTitle: TextStyleProp,
};

const buttonBase = (theme) => ({
  borderColor: theme.primaryColor || "black",
  borderRadius: 20,
  borderWidth: 2,
  padding: 10,
});

const buttonLabelLink = () => ({
  textDecorationLine: "underline",
});

const page = (theme) => ({
  backgroundColor: theme.backgroundColor || "white",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const textBase = (theme) => ({
  color: theme.primaryColor || "black",
  fontFamily: theme.fontFamily || "arial",
  fontSize: 28,
});

const textTitle = (theme) => ({
  fontWeight: "bold",
  fontSize: 48,
});

export function createTheme(theme: ThemeProps): Theme {
  return StyleSheet.create({
    buttonBase: buttonBase(theme),
    buttonLabelLink: buttonLabelLink(theme),
    page: page(theme),
    textBase: textBase(theme),
    textTitle: textTitle(theme),
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
