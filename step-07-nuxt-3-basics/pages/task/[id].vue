<template>
    <div>
        <div v-if="task">
            <h2>Task: {{ task.title }}</h2>
            <p>Description: {{ task.description || 'No description available' }}</p>
        </div>
        <div v-else>Task not found</div>
    </div>
</template>

<script setup>
import { useTaskStore } from '~/stores/TaskStore'

const route = useRoute()
const taskStore = useTaskStore()

// Load tasks from store if not already loaded
if (taskStore.tasks.length === 0) {
    taskStore.loadTasks()
}

// Get task by ID from store
const task = computed(() => {
    const id = parseInt(route.params.id)
    return taskStore.tasks.find(t => t.id === id)
})
</script>