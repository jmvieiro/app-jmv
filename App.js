import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { ItemList } from "./components/ItemList";
import { styles } from "./css/styles";

export default function App() {
  const [lst, setList] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text) {
      lst.push(text);
      setList(lst);
      setText("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setText(text)}
          defaultValue={text}
          placeholder="Item de lista"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={addItem}>
          <View style={styles.button}>
            <Text>Agregar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <ItemList list={lst} />
      </View>
    </View>
  );
}
