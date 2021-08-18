import { FlatList } from "react-native";
import { ListItem } from "./ListItem";
import React from "react";

export const List = ({ lst, handleModalOpen }) => {
  return (
    <FlatList
      data={lst}
      renderItem={data => 
        <ListItem item={data.item} handleModalOpen={handleModalOpen} />
      }
      keyExtractor={(item) => item.id}
    />
  );
};
