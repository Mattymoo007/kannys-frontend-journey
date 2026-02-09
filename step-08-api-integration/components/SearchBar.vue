<template>
  <form class="search-bar" @submit.prevent="$emit('search', query)">
    <div class="search-input-wrapper">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        v-model="query"
        type="text"
        placeholder="Search for a city…"
        class="search-input"
        :disabled="disabled"
      />
    </div>
    <button type="submit" class="search-btn" :disabled="disabled || !query.trim()">
      Search
    </button>
  </form>
</template>

<script setup lang="ts">
defineProps<{ disabled?: boolean }>()
defineEmits<{ search: [query: string] }>()

const query = defineModel<string>('modelValue', { default: '' })
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 0.75rem;
  width: 100%;
  max-width: 540px;
}

.search-input-wrapper {
  flex: 1;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background: #fff;
  color: #1e293b;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.search-input::placeholder {
  color: #94a3b8;
}

.search-btn {
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  white-space: nowrap;
}

.search-btn:hover:not(:disabled) {
  background: #2563eb;
}

.search-btn:active:not(:disabled) {
  transform: scale(0.97);
}

.search-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
