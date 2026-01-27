<template>
  <Header #header>
    <h1>My Task Manager</h1>
  </Header>
  <main>
    <TaskForm @add-task="taskStore.addTask" />

    <TaskFilter :current-filter="taskStore.currentFilter" @filter-change="taskStore.setFilter" />

    <TaskList :tasks="taskStore.filteredTasks">
      <template #default="{ task }">
        <TaskItem
          :task="task"
          @toggle-complete="() => taskStore.toggleComplete(task.id)"
          @delete-task="() => taskStore.deleteTask(task.id)"
        />
      </template>
    </TaskList>

    <!-- Undo notification -->
    <div v-if="taskStore.canUndo" class="undo-notification">
      <span>Task "{{ taskStore.lastDeletedTask?.title }}" deleted</span>
      <button @click="taskStore.undoDelete">Undo</button>
      <button @click="taskStore.clearUndo" class="dismiss">✕</button>
    </div>
  </main>
  <Footer #footer>
    <p>© 2026 Kanny Gusenga</p>
  </Footer>
</template>

<script setup>
import TaskItem from './components/TaskItem.vue'
import TaskList from './components/TaskList.vue'
import TaskForm from './components/TaskForm.vue'
import TaskFilter from './components/TaskFilter.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { useTaskStore } from './stores/TaskStore.js'

const taskStore = useTaskStore()
</script>

<style scoped>
.undo-notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.undo-notification button {
  background: #4ec5c1;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.undo-notification button.dismiss {
  background: transparent;
  padding: 4px 8px;
}

.undo-notification button:hover {
  opacity: 0.8;
}
</style>
