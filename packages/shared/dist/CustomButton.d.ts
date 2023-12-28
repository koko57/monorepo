import React from "react";
import { ViewStyle } from "react-native";
type Props = {
    onPress: () => void;
    buttonText: string;
    style?: ViewStyle;
};
declare const CustomButton: ({ onPress, style, buttonText }: Props) => React.JSX.Element;
export default CustomButton;
