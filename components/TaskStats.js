import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export const TaskStats = ({ tasks }) => {
  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    high: tasks.filter(t => t.priority.toLowerCase() === 'high').length,
    pending: tasks.filter(t => !t.completed).length
  };

  return (
    <View style={styles.statsContainer}>
      <Card style={styles.statsCard}>
        <Card.Content style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text variant="titleLarge">{stats.total}</Text>
            <Text variant="bodySmall">Total</Text>
          </View>
          <View style={styles.statItem}>
            <Text variant="titleLarge" style={{ color: 'green' }}>
              {stats.completed}
            </Text>
            <Text variant="bodySmall">Completed</Text>
          </View>
          <View style={styles.statItem}>
            <Text variant="titleLarge" style={{ color: 'red' }}>
              {stats.high}
            </Text>
            <Text variant="bodySmall">High</Text>
          </View>
          <View style={styles.statItem}>
            <Text variant="titleLarge" style={{ color: 'orange' }}>
              {stats.pending}
            </Text>
            <Text variant="bodySmall">Pending</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
    statsSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statsText: {
      color: '#666666',
    },
    statsContainer: {
      padding: 16,
    },
    statsCard: {
      borderRadius: 12,
    },
    statsGrid: {
        display: "flex",
        flexDirection: "row",
    },
    statItem: {
      alignItems: 'center',
      flex: 1,
      padding: 5,
    //   backgroundColor: "red"
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8,
    },
    titleSection: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    taskTitle: {
      flex: 1,
    },
    description: {
      marginBottom: 16,
      color: '#666666',
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: '#999999',
    },
    taskFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    priorityBadge: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 16,
    },
    priorityText: {
      color: '#ffffff',
      fontWeight: '500',
      textTransform: 'uppercase',
      fontSize: 12,
    },
    actions: {
      flexDirection: 'row',
      gap: 8,
    },
    actionButton: {
      borderRadius: 8,
      marginLeft: 8,
    },
    deleteButton: {
      backgroundColor: '#ef4444',
    },
    deleteButtonText: {
      color: '#ffffff',
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      borderRadius: 16,
    },
  });