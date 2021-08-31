import React, { useState } from "react";

import AppLoading from "expo-app-loading";
import { DetailScreen } from "./screens/DetailScreen";
import { Header } from "./components/Header";
import { MainScreen } from "./screens/MainScreen";
import { View } from "react-native";
import { gStyles } from "./css/gStyles";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "YK-Bold": require("./assets/fonts/static/YanoneKaffeesatz-Bold.ttf"),
    "YK-ExtraLight": require("./assets/fonts/static/YanoneKaffeesatz-ExtraLight.ttf"),
    "YK-Light": require("./assets/fonts/static/YanoneKaffeesatz-Light.ttf"),
    "YK-Medium": require("./assets/fonts/static/YanoneKaffeesatz-Medium.ttf"),
    "YK-Regular": require("./assets/fonts/static/YanoneKaffeesatz-Regular.ttf"),
    "YK-SemiBold": require("./assets/fonts/static/YanoneKaffeesatz-SemiBold.ttf"),
  });
  const [lst, setList] = useState([]);
  const [text, setText] = useState("");
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [inputError, setInputError] = useState("");
  const [taskSelected, setTaskSelected] = useState(null);

  if (!loaded) return <AppLoading />;

  const handleTaskDetail = (task) => {
    setTaskSelected(task);
    handleClean();
  };

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
          sublist: [],
          state: false,
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

  const handleModalClose = () => {
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

  const handleItemStateChange = (id) => {
    let aux = [...lst];
    let item = aux.find((item) => item.id === id);
    if (item) item.state = !item.state;
    setList(aux);
  };

  const handleTaskDetailStateChange = (id) => {
    let aux = [...lst];
    let item = aux.find((item) => item.id === taskSelected.id);
    if (item) {
      let item2 = item.sublist.find((item) => item.id === id);
      if (item2) {
        item2.state = !item2.state;
        setList(aux);
      }
    }
  };

  const handleAddDetail = () => {
    if (text) {
      let aux = [...lst];
      let item = aux.find((item) => item.id === taskSelected.id);
      if (item)
        item.sublist = [
          ...item.sublist,
          { id: Math.random().toString(), value: text, state: false },
        ];
      setList(aux);
      setText("");
      setInputError("");
    } else setInputError("Required");
  };

  return (
    <View style={gStyles.container}>
      <Header title="To Do List" />
      {!taskSelected ? (
        <MainScreen
          text={text}
          handleChangeText={handleChangeText}
          handleAddItem={handleAddItem}
          handleClean={handleClean}
          inputError={inputError}
          lst={lst}
          handleModalOpen={handleModalOpen}
          handleItemStateChange={handleItemStateChange}
          modalVisible={modalVisible}
          itemSelected={itemSelected}
          handleConfirmDelete={handleConfirmDelete}
          handleModalClose={handleModalClose}
          handleTaskDetail={handleTaskDetail}
        />
      ) : (
        <DetailScreen
          taskSelected={taskSelected}
          handleModalOpen={handleModalOpen}
          handleItemStateChange={handleItemStateChange}
          text={text}
          handleChangeText={handleChangeText}
          handleAddItem={handleAddDetail}
          handleClean={handleClean}
          inputError={inputError}
          handleTaskDetail={handleTaskDetail}
          handleTaskDetailStateChange={handleTaskDetailStateChange}
        />
      )}
    </View>
  );
}
