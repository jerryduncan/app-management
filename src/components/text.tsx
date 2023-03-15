import React from "react";
import { Text as RNText, TextProps } from "react-native";

interface Props extends TextProps {
  children: React.ReactNode;
}

const Text = ({ children, ...props }: Props) => {
  return <RNText {...props}>{children}</RNText>;
};

export default Text;
