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
