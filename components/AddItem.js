import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import COLORS from "../constants/colors";
import { Card } from "../screens/Card";
import React from "react";
import { gStyles } from "../css/gStyles";

export const AddItem = ({
  text,
  handleChangeText,
  handleAddItem,
  handleClean,
  inputError,
}) => {
  return (
    <View style={styles.screen}>
      <Card style={gStyles.inputContainer}>
        <TextInput
          placeholder="Add new task!"
          style={gStyles.inputText}
          onChangeText={handleChangeText}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <Text style={gStyles.inputError}>{inputError}</Text>
          <TouchableOpacity onPress={handleClean}>
            <View
              style={[gStyles.button, { backgroundColor: COLORS.secondary }]}
            >
              <Text style={gStyles.text}>Clean</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddItem}>
            <View style={[gStyles.button, { backgroundColor: COLORS.success }]}>
              <Text style={gStyles.text}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginBottom: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    marginBottom: 20,
    color: "black",
  },
  buttonContainer: {
    marginTop: 7.5,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
});
