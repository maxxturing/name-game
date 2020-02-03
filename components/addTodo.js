import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = val => {
    setText(val);
  };

  return (
    <View style={styles.addSection}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add to list"
        color="#3cba54"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff"
  },
  addSection: {
    padding: 40,
    backgroundColor: "#f4c20d" // Google yellow
  }
});
