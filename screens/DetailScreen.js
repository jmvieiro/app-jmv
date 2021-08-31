import { Text, TouchableOpacity, View } from "react-native";

import { AddItem } from "../components/AddItem";
import COLORS from "../constants/colors";
import { List } from "../components/List/List";
import React from "react";
import { gStyles } from "../css/gStyles";

export const DetailScreen = ({
  taskSelected,
  handleModalOpen,
  handleItemStateChange,
  handleTaskDetail,
  text,
  handleChangeText,
  handleAddItem,
  handleClean,
  inputError,
  handleTaskDetailStateChange,
}) => {
  return (
    <>
      <View style={{ marginTop: 10, paddingLeft: 10, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            handleTaskDetail(null);
          }}
        >
          <View
            style={[
              gStyles.button,
              {
                width: "auto",
                backgroundColor: COLORS.success,
              },
            ]}
          >
            <Text style={[gStyles.text, { fontSize: 30 }]}>Main Screen</Text>
          </View>
        </TouchableOpacity>
        <Text style={[gStyles.text, { fontSize: 30, paddingTop: 10 }]}>
          {" > "}Detail Screen
        </Text>
      </View>
      <View style={{ marginTop:15 }}>
        <List
          lst={[taskSelected]}
          handleModalOpen={handleModalOpen}
          handleItemStateChange={handleItemStateChange}
          main={false}
        />
        <AddItem
          text={text}
          handleChangeText={handleChangeText}
          handleAddItem={handleAddItem}
          handleClean={handleClean}
          inputError={inputError}
        />
        <List
          lst={taskSelected.sublist}
          handleModalOpen={handleModalOpen}
          handleItemStateChange={handleTaskDetailStateChange}
          main={false}
        />
      </View>
    </>
  );
};
