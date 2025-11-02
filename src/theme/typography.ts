import { StyleSheet } from "react-native";
import colors from "./color";

const typography = StyleSheet.create({
  heading: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 24,
    fontWeight: 700,
    color: colors.secondaryText,
  },
  subheading: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 20,
    fontWeight: 600,
    color: colors.primaryText,
  },
  body: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    fontWeight: "400",
    color: colors.primaryText,
  },
  count: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 28,
    fontWeight: 600,
    color: colors.buttonBackground,
  },
  button: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 12,
    fontWeight: 300,
    color: colors.secondaryText,
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 24,
    fontWeight: 600,
    color: colors.secondaryText,
  },
  label: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 22,
    fontWeight: 300,
    color: colors.tertiaryText,
  },
  read: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    fontWeight: 300,
    color: colors.tertiaryText,
  },
});

export default typography;
