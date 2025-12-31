<template>
  <form @submit.prevent="submitTask" class="task-form">
    <input v-model="title" type="text" placeholder="Enter task title" required />
    <select v-model="priority" required>
      <option disabled value="">Priority</option>
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>

    <button type="submit" :disabled="!title.trim() || !priority">Add Task</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-task'])

const title = ref('')
const priority = ref('')

function submitTask() {
  if (!title.value.trim() || !priority.value) return

  emit('add-task', {
    title: title.value.trim(),
    priority: priority.value,
  })

  title.value = ''
  priority.value = ''
}
</script>

<style scoped>
.task-form {
  margin-bottom: 16px;
}
input[type='text'] {
  width: 100%;
  height: 50px;
  background: #fff;
  color: #333;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: border 0.3s linear;
}
input[type='text']:focus {
  outline: none;
  border: 1px solid #4ec5c1;
}
select {
  border-radius: 10px;
  border: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;
}
select:focus-visible {
  outline: #4ec5c1 1px solid;
}
button {
  background: #4ec5c1;
  color: #f9f6ed;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}
button:disabled {
  border: 2px solid dimgrey;
  color: dimgrey;
  background-color: #e4e4e4;
  cursor: default;
  box-shadow: none !important;
}
@media (max-width: 680px) {
  button {
    margin-left: 2%;
  }
  button,
  select {
    width: 49%;
  }
  input {
    margin-bottom: 8px;
  }
}
@media (min-width: 680px) {
  .task-form {
    display: flex;
    justify-content: space-between;
  }
  select {
    width: 17%;
  }
  input[type='text'] {
    width: 66%;
  }
}
</style>
