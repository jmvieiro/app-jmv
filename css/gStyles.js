import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
  container: {
    paddingTop: 70,
    padding: 50,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#34fddd",
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: "#ddd",
  },
  text: {
    padding: 10,
  },
  inputError: {
    color: "red",
  },
});
