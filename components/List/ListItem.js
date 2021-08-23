import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../../constants/colors";
import { Card } from "../../screens/Card";
import React from "react";
import { gStyles } from "../../css/gStyles";

export const ListItem = ({ item, handleModalOpen }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Card style={styles.itemContainer}>
        <Text style={[gStyles.text, { padding: 10, flex: 1 }]}>
          {item.value}
        </Text>
        <TouchableOpacity
          onPress={() => {
            handleModalOpen(item.id);
          }}
        >
          <View style={[gStyles.button, { width: "auto" }]}>
            <Text>🕓</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleModalOpen(item.id);
          }}
        >
          <View style={[gStyles.button, { width: "auto" }]}>
            <Text>❌</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "95%",
    flexDirection: "row",
    padding: 10,
    paddingVertical: 4,
    marginTop: 5,
  },
});
