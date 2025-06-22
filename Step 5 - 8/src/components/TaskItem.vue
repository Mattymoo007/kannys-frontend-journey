<template>
  <div>
    <input type="checkbox" :checked="task.completed" @change="$emit('toggle-complete')"/>
    <span>{{ task.title }}</span>
    <button @click="$emit('delete-task')">🗑️</button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>