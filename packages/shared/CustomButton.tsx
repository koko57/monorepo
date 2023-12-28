import React from "react";
import {Pressable, Text, ViewStyle} from "react-native";

type Props = {
    onPress: () => void;
    buttonText: string;
    style?: ViewStyle;
}

const CustomButton = ({ onPress, style, buttonText }: Props) => {
    return (
        <Pressable onPress={onPress} style={style}>
            <Text>{buttonText}</Text>
        </Pressable>
    );
};

export default CustomButton;
