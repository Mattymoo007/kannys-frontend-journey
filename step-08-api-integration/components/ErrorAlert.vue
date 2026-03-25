<template>
  <div class="error-alert" role="alert">
    <div class="error-icon">⚠️</div>
    <div class="error-body">
      <p class="error-title">{{ title }}</p>
      <p class="error-message">{{ message }}</p>
    </div>
    <button v-if="dismissable" class="error-dismiss" @click="$emit('dismiss')">&times;</button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  message: string
  dismissable?: boolean
}>(), {
  title: 'Oops!',
  dismissable: true,
})

defineEmits<{ dismiss: [] }>()
</script>

<style scoped>
.error-alert {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  color: #991b1b;
  animation: slideIn 0.3s ease-out;
}

.error-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.error-body {
  flex: 1;
}

.error-title {
  font-weight: 700;
  margin: 0 0 0.15rem;
  font-size: 0.95rem;
}

.error-message {
  margin: 0;
  font-size: 0.875rem;
  color: #b91c1c;
}

.error-dismiss {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #b91c1c;
  padding: 0 0.25rem;
  line-height: 1;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
