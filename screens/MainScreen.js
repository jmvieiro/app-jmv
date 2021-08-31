import { Text, TouchableOpacity, View } from "react-native";

import { AddItem } from "../components/AddItem";
import COLORS from "../constants/colors";
import { List } from "../components/List/List";
import { ModalItem } from "../components/ModalItem";
import React from "react";
import { gStyles } from "../css/gStyles";

export const MainScreen = ({
  text,
  handleChangeText,
  handleAddItem,
  handleClean,
  inputError,
  lst,
  handleModalOpen,
  handleItemStateChange,
  modalVisible,
  itemSelected,
  handleConfirmDelete,
  handleModalClose,
  handleTaskDetail,
}) => {
  return (
    <>
      <View style={{ marginTop: 10, paddingLeft: 10, flexDirection: "row" }}>
        <TouchableOpacity>
          <View
            style={[
              gStyles.button,
              {
                width: "auto",
                backgroundColor: COLORS.primary,
              },
            ]}
          >
            <Text style={[gStyles.text, { fontSize: 30 }]}>Main Screen</Text>
          </View>
        </TouchableOpacity>
      </View>
      <AddItem
        text={text}
        handleChangeText={handleChangeText}
        handleAddItem={handleAddItem}
        handleClean={handleClean}
        inputError={inputError}
      />
      <List
        lst={lst}
        handleModalOpen={handleModalOpen}
        handleItemStateChange={handleItemStateChange}
        handleTaskDetail={handleTaskDetail}
      />
      <ModalItem
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handleConfirmDelete={handleConfirmDelete}
        handleModalClose={handleModalClose}
      />
    </>
  );
};
