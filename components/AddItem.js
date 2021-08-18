import { Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import { gStyles } from "../css/gStyles";

export const AddItem = ({ text, handleChangeText, handleAddItem, inputError }) => {
  return (
    <>
      <View style={gStyles.inputContainer}>
        <TextInput
          placeholder="Item de lista"
          style={gStyles.textInput}
          onChangeText={handleChangeText}
          value={text}
        />
        <TouchableOpacity onPress={handleAddItem}>
          <View style={gStyles.button}>
            <Text>Agregar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={gStyles.inputError}>{inputError}</Text>
    </>
  );
};
