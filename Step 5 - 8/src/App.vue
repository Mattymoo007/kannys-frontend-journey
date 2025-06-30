<template>
  <main>
    <TaskForm @add-task="addTask" />

    <TaskFilter @filter-change="onFilterChange" />

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
</template>

<script setup>
  import { ref, reactive, computed } from 'vue'
  import TaskItem from './components/TaskItem.vue'
  import TaskList from './components/TaskList.vue'
  import TaskForm from './components/TaskForm.vue'
  import TaskFilter from './components/TaskFilter.vue'

  const idCounter = ref(4)
  const filter = ref('All')
  const tasks = reactive([
    { id: 1, title: 'Learn Vue 3 basics', priority: 'High', completed: false },
    { id: 2, title: 'Learn Git', priority: 'Low', completed: false },
    { id: 3, title: 'Practice', priority: 'Medium', completed: false },
  ])

  const addTask = (task) => {
    tasks.push({ ...task, id: idCounter.value++, completed: false })
  }

  const toggleComplete = (id) => {
    const task = tasks.find((t) => t.id === id)
    if (task) task.completed = !task.completed
  }

  const deleteTask = (id) => {
    const index = tasks.findIndex((t) => t.id === id)
    if (index !== -1) tasks.splice(index, 1)
  }
  const onFilterChange = (newFilter) => {
    filter.value = newFilter
  }

  const filteredTasks = computed(() => {
    if (filter.value === 'Completed') return tasks.filter((t) => t.completed)
    if (filter.value === 'Pending') return tasks.filter((t) => !t.completed)
    return tasks
  })
</script>
