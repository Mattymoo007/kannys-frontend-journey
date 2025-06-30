<template>
  <div class="task-filter">
    <button
      v-for="option in options"
      :key="option"
      :class="{ active: currentFilter === option }"
      :disabled="disabledButton === option"
      @click="handleClick(option)"
    >
      {{ option }} Tasks
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const options = ['All', 'Pending', 'Completed']
const disabledButton = ref('All')

const { currentFilter } = defineProps({ currentFilter: String })

const emit = defineEmits(['filter-change'])

function handleClick(option) {
  if (disabledButton.value !== option) {
    disabledButton.value = option
    emit('filter-change', option)
  }
}
</script>

<style scoped>
    .task-filter {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    }
    button {
    width: 31.5%;
    background: #f97316;
    color: #f9f6ed;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    cursor: pointer;
    }
    button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: grey;
    }
</style>
