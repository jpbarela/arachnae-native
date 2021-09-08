// @flow
import * as React from "react";
import { Pressable, Text } from "react-native";
import { ThemeContext } from "../Theme";
import { removeUndefined } from "../utils";

type ButtonProps = {
  title: string,
  disabled?: boolean,
  onPress?: () => void,
  type?: "button" | "link",
};

export type ButtonStyleProps = {
  color?: string,
  margin?: string,
  marginRight?: string,
  marginLeft?: string,
  marginTop?: string,
  marginBottom?: string,
};

export function Button({
  onPress,
  title,
  disabled,
  color,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  type,
}: ButtonProps & ButtonStyleProps): React.Node {
  const theme = React.useContext(ThemeContext);

  const dynamicLabelStyle = removeUndefined({ color });
  const dynamicButtonStyle = removeUndefined({
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });
  if (color) {
    dynamicButtonStyle.borderColor = color;
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        type === "button" ? theme.buttonBase : theme.buttonLink,
        dynamicButtonStyle,
      ]}
    >
      <Text
        style={[
          theme.textBase,
          type === "link" ? theme.buttonLabelLink : null,
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
