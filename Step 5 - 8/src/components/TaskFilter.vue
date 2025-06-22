<template>
  <div>
    <button
      v-for="option in options"
      :key="option"
      :class="{ active: currentFilter === option }"
      @click="$emit('filter-change', option)"
    >
      {{ option }} Tasks
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskFilter',
  props: {
    currentFilter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      options: ['All', 'Completed', 'Pending']
    }
  }
}
</script>