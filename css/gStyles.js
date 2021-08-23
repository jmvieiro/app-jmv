import COLORS from "../constants/colors";
import FONTS from "../assets/fonts";
import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  inputText: {
    borderColor: COLORS.white,
    color: COLORS.white,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 0,
    width: "100%",
    fontSize: 14,
  },
  inputContainer: {
    width: "95%",
    backgroundColor: COLORS.primary,
  },
  button: {
    color: "white",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    width: 70,
    marginLeft: 2,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.primary,
    fontSize: 14,
  },
  inputError: {
    flex: 1,
    fontFamily: FONTS.primary,
    color: COLORS.error,
    padding: 4,
    alignSelf: "flex-start"
  },
});
