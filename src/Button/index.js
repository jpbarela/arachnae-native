// @flow
import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../Theme";
import { removeUndefined } from "../utils";

type ButtonProps = {
  title: string,
  disabled?: boolean,
  onPress?: () => void,
  type: "button" | "link",
  backgroundColor?: string,
  borderColor?: string,
  color?: string,
  margin?: number,
  marginRight?: number,
  marginLeft?: number,
  marginTop?: number,
  marginBottom?: number,
};

export function Button({
  onPress,
  title,
  disabled,
  backgroundColor,
  borderColor,
  color,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  type,
}: ButtonProps): React.Node {
  const theme = React.useContext(ThemeContext);

  const dynamicLabelStyle = removeUndefined({ color });
  const dynamicButtonStyle = removeUndefined({
    backgroundColor,
    borderColor,
    color,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });

  const buttonStyles = StyleSheet.compose(styles.buttonBase, theme.borderColor);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[type === "button" ? buttonStyles : null, dynamicButtonStyle]}
    >
      <Text
        style={[
          theme.textBase,
          type === "link" ? styles.buttonLabelLink : null,
          dynamicLabelStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

Button.defaultProps = {
  type: "button",
};

const styles = StyleSheet.create({
  buttonBase: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
  },
  buttonLabelLink: {
    textDecorationLine: "underline",
  },
});
