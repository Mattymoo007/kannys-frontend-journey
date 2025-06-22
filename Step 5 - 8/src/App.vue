<template>
  <main>
    <TaskForm @add-task="addTask"/>

    <TaskList :tasks="tasks">
      <template #default="{ task }">
        <TaskItem :task="task"/>
      </template>
    </TaskList>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import TaskItem from './components/TaskItem.vue'
  import TaskList from './components/TaskList.vue'
  import TaskForm from './components/TaskForm.vue'

  const idCounter = ref(4)

  const tasks = ref([
    { id: 1, title: 'Learn Vue 3 basics', priority: 'High', completed: false },
    { id: 2, title: 'Learn Git', priority: 'Medium', completed: false },
    { id: 3, title: 'Practice', priority: 'Low', completed: false }
  ])

  const addTask = (task) => {
    tasks.value.push({ ...task, id: idCounter.value++, completed: false })
  }
</script>

