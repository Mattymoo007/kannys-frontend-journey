import { ref } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export type Task = {
  id: number
  title: string
  priority: 'Low' | 'Medium' | 'High'
  completed: boolean
}

export function useTask() {
  const tasks = useLocalStorage('tasks', [
    { id: 1, title: 'Learn Vue 3 basics', priority: 'High', completed: false },
    { id: 2, title: 'Learn Git', priority: 'Low', completed: false },
    { id: 3, title: 'Practice', priority: 'Medium', completed: false },
  ])

  const idCounter = ref(
    tasks.value.length > 0
      ? Math.max(...tasks.value.map((t) => t.id)) + 1
      : 1
  )

  function addTask(task: Task) {
    const taskDefaults:Partial<Task> = { title: '', id: idCounter.value++, completed: false }
    tasks.value.push({ ...taskDefaults, ...task })
  }

  function toggleComplete(id: number) {
    const task = tasks.value.find((t) => t.id === id)
    if (task) task.completed = !task.completed
  }

  function deleteTask(id: number) {
    const index = tasks.value.findIndex((t) => t.id === id)
    if (index !== -1) tasks.value.splice(index, 1)
  }

  return {
    tasks,
    addTask,
    toggleComplete,
    deleteTask
  }
}
