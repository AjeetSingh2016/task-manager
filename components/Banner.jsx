import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Surface, Text, IconButton } from "react-native-paper";

export const Banner = ({ taskCount }) => {
  return (
    <Surface style={styles.banner} elevation={5}>
      <View style={styles.bannerContent}>
        {/* Welcome Section */}
        <View style={{ width: "65%"}}>
          <View style={styles.welcomeSection}>
            <View>
              
            </View>
            <Text variant="titleLarge" style={styles.welcomeText}>
              Task Manager
            </Text>
            
            <Text variant="bodyMedium" style={styles.subtitleText}>
              Organize your day efficiently
            </Text>
          </View>

          {/* Task Stats */}
          <View style={styles.statsSection}>
           
            <Text variant="bodyMedium" style={styles.statsText}>
              {taskCount} {taskCount === 1 ? "task" : "tasks"} remaining
            </Text>
          </View>
        </View>

        <View style={{width: "35%", justifyContent: "center", alignItems: "center"}}>
         <Image source={require("../assets/notes.png")} style={styles.image} />
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  bannerContent: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red"
  },
  welcomeSection: {
    marginBottom: 12,
  },
  welcomeText: {
    fontWeight: "bold",
    color: "#1E293B",
  },
  subtitleText: {
    color: "#64748B",
  },
  statsSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  icon: {
    color: "#3B82F6", // Soft blue color
    // backgroundColor: "red"
  },
  statsText: {
    // marginLeft: 6,
    color: "#374151",
    fontWeight: "500",
  },
  image: {
    width: 70,  // Set width
    height: 70, // Set height
    // resizeMode: "contain", // Adjust how the image fits
  },
});
