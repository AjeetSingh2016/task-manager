import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FAB, SegmentedButtons } from "react-native-paper";
import { deleteTask, toggleComplete } from "../redux/taskSlice";
import { Banner } from "../components/Banner";
import { TaskStats } from "../components/TaskStats";
import { TaskCard } from "../components/TaskCard";

export default function TaskListScreen({ navigation }) {
  const [filter, setFilter] = useState("all");
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "active":
        return !task.completed;
      case "completed":
        return task.completed;
      default:
        return true;
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Banner taskCount={tasks.length} />
        <TaskStats tasks={tasks} />

        <SegmentedButtons
          value={filter}
          onValueChange={setFilter}
          buttons={[
            { value: "all", label: "All Tasks", icon: "format-list-bulleted" },
            { value: "active", label: "Active", icon: "clock-outline" },
            { value: "completed", label: "Completed", icon: "check-circle" },
          ]}
          style={styles.segmentedButtons}
        />

        {filteredTasks.length > 0 ? (
          <View style={styles.taskList}>
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={() => dispatch(toggleComplete(task.id))}
                onEdit={() => navigation.navigate("AddEditTask", { task })}
                onDelete={() => dispatch(deleteTask(task.id))}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyList}>
            <Text style={{textAlign: "center"}}>
                Add a new task by tapping the + button below.
    
          </Text>
          </View>
        )}
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("AddEditTask")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  banner: {
    backgroundColor: "#ffffff",
    margin: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  bannerContent: {
    padding: 16,
  },
  welcomeSection: {
    marginBottom: 8,
  },
  welcomeText: {
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  subtitleText: {
    color: "#666666",
  },
  statsSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsText: {
    color: "#666666",
  },
  statsContainer: {
    padding: 16,
  },
  statsCard: {
    borderRadius: 12,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
    padding: 8,
  },
  segmentedButtons: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  taskList: {
    padding: 16,
  },
  taskCard: {
    marginBottom: 16,
    borderRadius: 12,
  },
  completedCard: {
    opacity: 0.7,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  titleSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  taskTitle: {
    flex: 1,
  },
  description: {
    marginBottom: 16,
    color: "#666666",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999999",
  },
  taskFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  priorityText: {
    color: "#ffffff",
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: 12,
  },
  actions: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    borderRadius: 8,
    marginLeft: 8,
  },
  deleteButton: {
    backgroundColor: "#ef4444",
  },
  deleteButtonText: {
    color: "#ffffff",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 16,
  },
  emptyList:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    padding: 16,
    color: "#666666",
    textAlign: "center",
  }
});
