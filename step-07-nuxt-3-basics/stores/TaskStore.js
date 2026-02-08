import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
  // State
  const tasks = ref([])
  const currentFilter = ref('All')
  const idCounter = ref(1)
  const error = ref(null)

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

  // Load from localStorage
  function loadTasks() {
    try {
      const stored = localStorage.getItem('tasks')
      if (stored) {
        tasks.value = JSON.parse(stored)
        idCounter.value = tasks.value.length > 0 
          ? Math.max(...tasks.value.map((t) => t.id)) + 1 
          : 1
      } else {
        tasks.value = [
          { id: 1, title: 'Learn Vue 3 basics', priority: 'High', completed: false },
          { id: 2, title: 'Learn Git', priority: 'Low', completed: false },
          { id: 3, title: 'Practice', priority: 'Medium', completed: false },
        ]
        idCounter.value = 4
      }
      error.value = null
    } catch (err) {
      error.value = 'Failed to load tasks from storage'
      console.error('Error loading tasks:', err)
    }
  }

  // Actions
  function addTask(task) {
    try {
      if (!task.title?.trim()) {
        throw new Error('Task title is required')
      }

      const newTask = {
        id: idCounter.value++,
        title: task.title.trim(),
        description: task.description?.trim() || '',
        priority: task.priority || 'Medium',
        completed: false,
      }
      tasks.value.push(newTask)
      error.value = null
    } catch (err) {
      error.value = err.message
      console.error('Error adding task:', err)
    }
  }

  function toggleComplete(id) {
    try {
      const task = tasks.value.find((t) => t.id === id)
      if (!task) {
        throw new Error(`Task with id ${id} not found`)
      }
      task.completed = !task.completed
      error.value = null
    } catch (err) {
      error.value = err.message
      console.error('Error toggling task:', err)
    }
  }

  function deleteTask(id) {
    try {
      const index = tasks.value.findIndex((t) => t.id === id)
      if (index === -1) {
        throw new Error(`Task with id ${id} not found`)
      }

      lastDeletedTask.value = { ...tasks.value[index] }
      lastDeletedIndex.value = index
      tasks.value.splice(index, 1)
      error.value = null
    } catch (err) {
      error.value = err.message
      console.error('Error deleting task:', err)
    }
  }

  function undoDelete() {
    try {
      if (lastDeletedTask.value === null || lastDeletedIndex.value === null) {
        throw new Error('No task to restore')
      }

      tasks.value.splice(lastDeletedIndex.value, 0, lastDeletedTask.value)
      lastDeletedTask.value = null
      lastDeletedIndex.value = null
      error.value = null
    } catch (err) {
      error.value = err.message
      console.error('Error undoing delete:', err)
    }
  }

  function clearUndo() {
    lastDeletedTask.value = null
    lastDeletedIndex.value = null
  }

  function setFilter(filter) {
    try {
      const validFilters = ['All', 'Completed', 'Pending']
      if (!validFilters.includes(filter)) {
        throw new Error(`Invalid filter: ${filter}`)
      }
      currentFilter.value = filter
      error.value = null
    } catch (err) {
      error.value = err.message
      console.error('Error setting filter:', err)
    }
  }

  function clearError() {
    error.value = null
  }

  // Watch for changes and persist to localStorage
  watch(
    tasks,
    (val) => {
      try {
        localStorage.setItem('tasks', JSON.stringify(val))
      } catch (err) {
        error.value = 'Failed to save tasks'
        console.error('Error saving tasks:', err)
      }
    },
    { deep: true }
  )

  // Initialize
  loadTasks()

  return {
    tasks,
    currentFilter,
    filteredTasks,
    canUndo,
    lastDeletedTask,
    error,
    addTask,
    toggleComplete,
    deleteTask,
    undoDelete,
    clearUndo,
    setFilter,
    clearError,
  }
})