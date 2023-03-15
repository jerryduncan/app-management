import React from "react";
import { Button } from "react-native-paper";
import { colors } from "../constants";

interface Props {
  onPress: () => void;
  mode?: 'contained' | 'outlined';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  style?: any;
  color?: string;
  width?: number;
}

const CustomButton = ({ onPress, mode = "contained", disabled = false, loading = false, children, style, color, width }: Props) => {
  const buttonColor = color || colors.blue;
  const buttonWidth = width || 250;

  return (
    <Button 
        mode={mode} 
        disabled={disabled} 
        loading={loading} onPress={onPress}
        style={[{ backgroundColor: buttonColor, width: buttonWidth, borderRadius: 5 }, style]}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
