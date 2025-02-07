import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Checkbox, Button, Text, IconButton } from 'react-native-paper';

export const TaskCard = ({ task, onToggle, onEdit, onDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return '#ef4444';
      case 'medium': return '#f97316';
      case 'low': return '#22c55e';
      default: return '#000000';
    }
  };

  return (
    <Card style={[styles.taskCard, task.completed && styles.completedCard]}>
      <Card.Content>
        <View style={styles.taskHeader}>
          <View style={styles.titleSection}>
            <Title style={[styles.taskTitle, task.completed && styles.completedText]}>
              {task.title}
            </Title>
            {task.priority.toLowerCase() === 'high' && !task.completed && (
              <IconButton icon="alert" size={20} iconColor="#ef4444" />
            )}
          </View>
          <Checkbox
            status={task.completed ? 'checked' : 'unchecked'}
            onPress={onToggle}
          />
        </View>
        
        <Paragraph style={[styles.description, task.completed && styles.completedText]}>
          {task.description}
        </Paragraph>
        
        <View style={styles.taskFooter}>
          <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(task.priority) }]}>
            <Text style={styles.priorityText}>{task.priority}</Text>
          </View>
          
          <View style={styles.actions}>
            <Button
              mode="outlined"
              onPress={onEdit}
              style={styles.actionButton}
              icon="pencil"
            >
              Edit
            </Button>
            <Button
              mode="contained"
              onPress={onDelete}
              style={[styles.actionButton, styles.deleteButton]}
              labelStyle={styles.deleteButtonText}
              icon="delete"
            >
              Delete
            </Button>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    banner: {
      backgroundColor: '#ffffff',
      margin: 16,
      borderRadius: 12,
      overflow: 'hidden',
    },
    bannerContent: {
      padding: 16,
    },
    welcomeSection: {
      marginBottom: 8,
    },
    welcomeText: {
      fontWeight: 'bold',
      color: '#1a1a1a',
    },
    subtitleText: {
      color: '#666666',
    },
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    statItem: {
      alignItems: 'center',
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