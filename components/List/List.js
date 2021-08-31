import { FlatList } from "react-native";
import { ListItem } from "./ListItem";
import React from "react";

export const List = ({
  lst,
  handleModalOpen,
  handleItemStateChange,
  handleTaskDetail = null,
  main = true,
}) => {
  return (
    <FlatList
      data={lst}
      renderItem={(data) => (
        <ListItem
          item={data.item}
          handleModalOpen={handleModalOpen}
          handleItemStateChange={handleItemStateChange}
          handleTaskDetail={handleTaskDetail}
          main={main}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
