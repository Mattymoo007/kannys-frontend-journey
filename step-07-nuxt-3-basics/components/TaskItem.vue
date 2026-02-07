<template>
  <div class="task-item" :class="priorityClass">
    <div>
      <input type="checkbox" :checked="task.completed" @change="$emit('toggle-complete')"/>
      <span>{{ task.title }}</span>
    </div>
    <button @click="$emit('delete-task')">🗑️</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const priorityClass = computed(() => {
  switch (props.task.priority) {
    case 'High':
      return 'high'
    case 'Medium':
      return 'medium'
    case 'Low':
      return 'low'
    default:
      return ''
  }
})
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}
input[type="checkbox"] {
  margin-right: 8px;
}
.task-item.high {
  border-left: 4px solid red;
}
.task-item.medium {
  border-left: 4px solid orange;
}
.task-item.low {
  border-left: 4px solid green;
}
input:checked + span {
  text-decoration: line-through;
  color: #999;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
</style>