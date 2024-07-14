import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function startAddGoalHandler() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  function handleAddGoal(input) {
    if (!input) return;
    setGoals((prev) => {
      const newGoal = { id: Math.random() + input, text: input };
      return [...prev, newGoal];
    });
  }

  function deleteGoal(id) {
    setGoals((prev) => prev.filter((el, i) => el.id !== id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {openModal && (
          <GoalInput
            openModal={openModal}
            closeModal={closeModal}
            onAddGoal={handleAddGoal}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData, i) => {
              return <GoalItem itemData={itemData} onDelete={deleteGoal} />;
            }}
            // keyExtractor={(item, index)=> index}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    gap: 4,
  },
});
