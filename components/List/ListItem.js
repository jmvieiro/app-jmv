import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Card } from "../Card";
import React from "react";
import { gStyles } from "../../css/gStyles";

export const ListItem = ({
  item,
  handleModalOpen,
  handleItemStateChange,
  handleTaskDetail,
  main,
}) => {
  return (
    <View key={item.id} style={{ alignItems: "center" }}>
      <Card style={styles.itemContainer}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            if (main) {
              handleTaskDetail(item);
            } else {
              return;
            }
          }}
        >
          <Text style={[gStyles.text, { padding: 10, flex: 1 }]}>
            {main && "🔎  "}
            {item.value}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleItemStateChange(item.id);
          }}
        >
          <View style={[gStyles.button, { width: "auto" }]}>
            <Text>{item.state ? "✅" : "🕓"}</Text>
          </View>
        </TouchableOpacity>
        {main && (
          <TouchableOpacity
            onPress={() => {
              handleModalOpen(item.id);
            }}
          >
            <View style={[gStyles.button, { width: "auto" }]}>
              <Text>❌</Text>
            </View>
          </TouchableOpacity>
        )}
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
