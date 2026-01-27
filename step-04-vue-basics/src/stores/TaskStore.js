import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
  // State
  const stored = localStorage.getItem('tasks')
  const tasks = ref(
    stored
      ? JSON.parse(stored)
      : [
          { id: 1, title: 'Learn Vue 3 basics', priority: 'High', completed: false },
          { id: 2, title: 'Learn Git', priority: 'Low', completed: false },
          { id: 3, title: 'Practice', priority: 'Medium', completed: false },
        ]
  )
  
  const currentFilter = ref('All')
  const idCounter = ref(tasks.value.length > 0 ? Math.max(...tasks.value.map((t) => t.id)) + 1 : 1)

  // Undo state
  const lastDeletedTask = ref(null)
  const lastDeletedIndex = ref(null)

  // Getters
  const canUndo = computed(() => lastDeletedTask.value !== null)
  const filteredTasks = computed(() => {
    if (currentFilter.value === 'Completed') {
      return tasks.value.filter((t) => t.completed)
    }
    if (currentFilter.value === 'Pending') {
      return tasks.value.filter((t) => !t.completed)
    }
    return tasks.value
  })

  // Actions
  function addTask(task) {
    const newTask = {
      id: idCounter.value++,
      title: task.title || '',
      priority: task.priority || 'Medium',
      completed: false,
    }
    tasks.value.push(newTask)
  }

  function toggleComplete(id) {
    const task = tasks.value.find((t) => t.id === id)
    if (task) {
      task.completed = !task.completed
    }
  }

  function deleteTask(id) {
    const index = tasks.value.findIndex((t) => t.id === id)
    if (index !== -1) {
      // Store the deleted task for undo
      lastDeletedTask.value = { ...tasks.value[index] }
      lastDeletedIndex.value = index
      tasks.value.splice(index, 1)
    }
  }

  function undoDelete() {
    if (lastDeletedTask.value !== null && lastDeletedIndex.value !== null) {
      tasks.value.splice(lastDeletedIndex.value, 0, lastDeletedTask.value)
      lastDeletedTask.value = null
      lastDeletedIndex.value = null
    }
  }

  function clearUndo() {
    lastDeletedTask.value = null
    lastDeletedIndex.value = null
  }

  function setFilter(filter) {
    currentFilter.value = filter
  }

  // Watch for changes and persist to localStorage
  watch(
    tasks,
    (val) => {
      localStorage.setItem('tasks', JSON.stringify(val))
    },
    { deep: true }
  )

  return {
    tasks,
    currentFilter,
    filteredTasks,
    canUndo,
    lastDeletedTask,
    addTask,
    toggleComplete,
    deleteTask,
    undoDelete,
    clearUndo,
    setFilter,
  }
})