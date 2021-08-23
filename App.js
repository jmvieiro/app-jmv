import React, { useState } from "react";

import { AddItem } from "./components/AddItem";
import { Header } from "./components/Header";
import { List } from "./components/List/List";
import { ModalItem } from "./components/ModalItem";
import { View } from "react-native";
import { gStyles } from "./css/gStyles";

export default function App() {
  const [lst, setList] = useState([]);
  const [text, setText] = useState("");
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [inputError, setInputError] = useState("");

  const handleChangeText = (t) => setText(t);

  const handleAddItem = () => {
    if (text) {
      if (lst.find((item) => item.value === text)) {
        setInputError("Task already added.");
        return;
      }
      setList([
        ...lst,
        {
          id: Math.random().toString(),
          value: text,
        },
      ]);
      setText("");
      setInputError("");
    } else setInputError("Required");
  };

  const handleModalOpen = (id) => {
    setItemSelected(lst.find((item) => item.id === id));
    setModalVisible(true);
  };
  const handleModalClose = (id) => {
    setItemSelected({});
    setModalVisible(false);
  };

  const handleConfirmDelete = () => {
    setList(lst.filter((item) => item.id !== itemSelected.id));
    setItemSelected({});
    setModalVisible(false);
  };

  const handleClean = () => {
    setText("");
    setInputError("");
  };

  return (
    <View style={gStyles.container}>
      <Header title="To Do List" />
      <AddItem
        text={text}
        handleChangeText={handleChangeText}
        handleAddItem={handleAddItem}
        handleClean={handleClean}
        inputError={inputError}
      />
      <List lst={lst} handleModalOpen={handleModalOpen} />
      <ModalItem
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handleConfirmDelete={handleConfirmDelete}
        handleModalClose={handleModalClose}
      />
    </View>
  );
}
