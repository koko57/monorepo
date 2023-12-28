"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CustomButton = ({ onPress, style, buttonText }) => {
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: onPress, style: style },
        react_1.default.createElement(react_native_1.Text, null, buttonText)));
};
exports.default = CustomButton;
