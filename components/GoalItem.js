import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ itemData, onDelete }) {
  return (
    <View style={styles.goalItem} key={itemData.index}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDelete(itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedButton}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
  pressedButton: {
    opacity: 0.5,
  },
});

export default GoalItem;
