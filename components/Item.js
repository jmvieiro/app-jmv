import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "../css/styles";

export const Item = ({ item }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={styles.inputContainer}>
        <View style={styles.textInput}>
          <Text style={{ paddingTop: 12.5 }}>{item}</Text>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.button}>
            <Text>X</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
