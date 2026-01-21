import { ref, computed } from 'vue'

export function useFilter(tasks) {
  const currentFilter = ref('All')

  function setFilter(newFilter) {
    currentFilter.value = newFilter
  }

  const filteredTasks = computed(() => {
    if (currentFilter.value === 'Completed') {
      return tasks.value.filter((t) => t.completed)
    }
    if (currentFilter.value === 'Pending') {
      return tasks.value.filter((t) => !t.completed)
    }
    return tasks.value
  })

  return {
    currentFilter,
    setFilter,
    filteredTasks
  }
}