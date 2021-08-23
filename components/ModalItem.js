import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../constants/colors";
import { Card } from "../screens/Card";
import React from "react";
import { gStyles } from "../css/gStyles";

export const ModalItem = ({
  modalVisible,
  itemSelected,
  handleConfirmDelete,
  handleModalClose,
}) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <Card style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalMessage}>Delete task?</Text>
          <Text style={styles.modalTitle}>{itemSelected.value}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={handleModalClose}>
              <View
                style={[gStyles.button, { backgroundColor: COLORS.secondary }]}
              >
                <Text>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirmDelete}>
              <View
                style={[gStyles.button, { backgroundColor: COLORS.success }]}
              >
                <Text>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop:80,
  },
  modalContent: {
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalMessage: {
    fontSize: 15,
    color: COLORS.white,
  },
  modalTitle: {
    color: COLORS.white,
    fontSize: 17,
    marginTop: 10,
    marginBottom: 20,
  },
});
