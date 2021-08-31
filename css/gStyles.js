import COLORS from "../constants/colors";
import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  inputText: {
    fontFamily: "YK-Bold",
    borderColor: COLORS.white,
    color: COLORS.white,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 0,
    width: "100%",
    fontSize: 18,
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
    fontFamily: "YK-Bold",
  },
  text: {
    color: COLORS.white,
    fontFamily: "YK-Bold",
    fontSize: 20,
  },
  inputError: {
    flex: 1,
    fontFamily: "YK-Bold",
    color: COLORS.error,
    padding: 4,
    fontSize: 20,
    alignSelf: "flex-start",
  },
});
