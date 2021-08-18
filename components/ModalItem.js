import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, gStyles.shadow]}>
          <Text style={styles.modalMessage}>¿Estás seguro de eliminar?</Text>
          <Text style={styles.modalTitle}>{itemSelected.value}</Text>
          <View style={gStyles.inputContainer}>
            <TouchableOpacity onPress={handleModalClose}>
              <View style={[gStyles.button, { backgroundColor: "#ddd" }]}>
                <Text>Cancelar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirmDelete}>
              <View style={[gStyles.button, { marginLeft: 1 }]}>
                <Text>Confirmar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    padding: 30,
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  modalMessage: {
    fontSize: 13,
  },
  modalTitle: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
