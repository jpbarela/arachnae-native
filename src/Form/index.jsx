// @flow
import * as React from "react";
import { TextInput } from "react-native";
import { removeUndefined } from "../utils";
import { useTheme } from "../Theme";

type NumericInputProps = {
  accessibilityHint?: string,
  backgroundColor?: string,
  borderColor?: string,
  borderWidth?: number,
  borderRadius?: number,
  color?: string,
  fontSize?: number,
  onChange?: (number) => void,
  placeholder?: string,
  textAlign?: string,
  width?: number,
};

export const NumericInput: React.AbstractComponent<NumericInputProps, any> =
  React.forwardRef(
    (
      {
        accessibilityHint,
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
        color,
        fontSize,
        onChange,
        placeholder,
        textAlign,
        width,
      },
      ref
    ) => {
      const theme = useTheme();

      const styles = removeUndefined({
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
        color,
        fontSize,
        textAlign,
        width,
      });

      return (
        <TextInput
          accessibilityHint={accessibilityHint}
          keyboardType="numeric"
          placeholder={placeholder}
          selectionColor={
            color ? color : theme.textBase && theme.textBase.color
          }
          style={[theme.textBase, styles]}
          onEndEditing={({ nativeEvent: { text } }) => {
            if (onChange) {
              onChange(parseFloat(text));
            }
          }}
          ref={ref}
        />
      );
    }
  );
