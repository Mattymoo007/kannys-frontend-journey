<template>
  <section class="error-page">
    <div class="error-container">
      <h1 class="error-code">{{ error.status }}</h1>
      <p class="error-message">{{ error.message || 'Something went wrong' }}</p>
      <NuxtLink to="/" class="home-link">Go back home</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #74bdb7;
  font-family: Arial, sans-serif;
}

.error-container {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.error-code {
  font-size: 4rem;
  color: #e74c3c;
  margin: 0 0 1rem 0;
}

.error-message {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.home-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #74bdb7;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.home-link:hover {
  background-color: #2a9b92;
}
</style>
