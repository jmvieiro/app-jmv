import { StyleSheet, View } from "react-native";

import COLORS from "../constants/colors";
import React from "react";

export const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    shadowColor: COLORS.white,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: .1,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
});
