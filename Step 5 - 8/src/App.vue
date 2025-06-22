<template>
  <main>
     <TaskList :tasks>
      <template #default="{ task }">
        <TaskItem :task="task"/>
      </template>
    </TaskList>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import TaskItem from './components/TaskItem.vue'
  import TaskList from './components/TaskList.vue';

  const tasks = ref([
    { id: 1, title: 'Learn Vue 3 basics', priority: 'High', completed: false },
    { id: 2, title: 'Learn Git', priority: 'Medium', completed: false },
    { id: 3, title: 'Practice', priority: 'Low', completed: false }
  ])
</script>

