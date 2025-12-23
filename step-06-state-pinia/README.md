# Step 6: State Management with Pinia

## Overview

Add Pinia state management to the To-Do app. Learn how to organize application state in a scalable way.

## Prerequisites

- Completed Step 5 (Component Patterns)

## Learning Goals

- Understand why state management is needed
- Set up and configure Pinia
- Create stores with state, getters, and actions
- Use stores in components

## Requirements

### Setup
- [ ] Install and configure Pinia
- [ ] Create a task store

### Store Design
- [ ] Define state: tasks, filter, loading states
- [ ] Create getters: filteredTasks, taskCount, completedCount
- [ ] Implement actions: addTask, removeTask, toggleComplete, setFilter

### Integration
- [ ] Replace component state with store
- [ ] Use store in all task-related components
- [ ] Persist state to localStorage

### Advanced
- [ ] Add error handling in actions
- [ ] Implement optimistic updates
- [ ] Add undo functionality for task deletion

## Success Criteria

- [ ] All task state managed by Pinia store
- [ ] Components are simpler (no prop drilling)
- [ ] State persists across page refreshes
- [ ] App still works exactly as before

## Resources

- [Pinia Official Docs](https://pinia.vuejs.org/)
- [Pinia + TypeScript](https://pinia.vuejs.org/core-concepts/state.html)

## AI Practice

- Ask AI to explain store patterns
- Compare your store design with AI suggestions
- Debug state issues with AI assistance
