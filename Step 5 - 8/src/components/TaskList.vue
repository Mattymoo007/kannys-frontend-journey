<template>
  <div class="task-list">
    <slot v-for="task in tasks" :task="task" :key="task.id" />
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.task-list {
  margin-top: 1rem;
}
</style>