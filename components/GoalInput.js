import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput({ onAddGoal, openModal, closeModal }) {
  const [input, setInput] = useState("");

  function handleBtn() {
    onAddGoal(input);
    setInput("");
    closeModal();
  }
  return (
    <Modal visible={openModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your goals"
            onChangeText={setInput}
            value={input}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button title="Add Goal" onPress={handleBtn} color="#b180f0" />
          <Button title="Close Modal" onPress={closeModal} color="#f31282" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    gap: 14,
    backgroundColor: "#5e0acc",
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    // marginHorizontal: 36,
    paddingHorizontal: 25,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 12,
    color: "#120438",
    borderRadius: 6,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: "auto",
  },
});

export default GoalInput;
