<template>
  <Header #header>
      <h1>My Task Manager</h1>
  </Header>
  <main>
    <TaskForm @add-task="addTask" />

    <TaskFilter :current-filter="currentFilter" @filter-change="setFilter" />

    <TaskList :tasks="filteredTasks">
      <template #default="{ task }">
        <TaskItem
          :task="task"
          @toggle-complete="() => toggleComplete(task.id)"
          @delete-task="() => deleteTask(task.id)"
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

import { useTask } from './composables/useTask.js'
import { useFilter } from './composables/useFilter.js'

const { tasks, addTask, toggleComplete, deleteTask } = useTask()
const { currentFilter, setFilter, filteredTasks } = useFilter(tasks)
</script>
