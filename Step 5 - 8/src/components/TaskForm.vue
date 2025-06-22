<template>
  <form @submit.prevent="submitTask">
    <input
      v-model="title"
      type="text"
      placeholder="Enter task title"
      required
    />
    <select v-model="priority" required>
      <option disabled value="">Priority</option>
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>

    <button type="submit" :disabled="!title.trim() || !priority">Add Task</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TaskForm',
  emits: ['add-task'],
  setup(props, { emit }) {
    const title = ref('')
    const priority = ref('')

    const submitTask = () => {
      if (!title.value.trim() || !priority.value) return;

        emit('add-task', {
        title: title.value.trim(),
        priority: priority.value
      })
      //console.log(title.value)
      title.value = ''
      priority.value = ''
    }

    return {
      title,
      priority,
      submitTask
    }
  }
}
</script>