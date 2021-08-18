import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { gStyles } from "../../css/gStyles";

export const ListItem = ({ item, handleModalOpen }) => {
  return (
    <View style={gStyles.itemContainer}>
      <Text style={gStyles.text}>{item.value}</Text>
      <TouchableOpacity
        onPress={() => {
          handleModalOpen(item.id);
        }}
      >
        <View style={gStyles.button}>
          <Text>X</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
