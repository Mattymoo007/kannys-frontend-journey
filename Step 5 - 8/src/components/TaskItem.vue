<template>
  <div>
    <input type="checkbox"/>
    <span>{{ task.title }}</span>
    <button>🗑️</button>
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