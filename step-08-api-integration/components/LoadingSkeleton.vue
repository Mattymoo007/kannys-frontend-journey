<template>
  <div class="skeleton-wrapper" aria-busy="true" aria-label="Loading weather data">
    <!-- Current weather skeleton -->
    <div class="skeleton-current">
      <div class="skeleton-line w-40 h-6"></div>
      <div class="skeleton-line w-24 h-4 mt-2"></div>
      <div class="skeleton-line w-32 h-14 mt-4"></div>
      <div class="skeleton-line w-48 h-4 mt-2"></div>
      <div class="skeleton-details">
        <div v-for="i in 6" :key="i" class="skeleton-detail-box"></div>
      </div>
    </div>

    <!-- Forecast skeleton -->
    <div class="skeleton-forecast">
      <div class="skeleton-line w-32 h-5 mb-4"></div>
      <div class="skeleton-forecast-grid">
        <div v-for="i in 5" :key="i" class="skeleton-forecast-day">
          <div class="skeleton-line w-16 h-4"></div>
          <div class="skeleton-circle"></div>
          <div class="skeleton-line w-12 h-6"></div>
          <div class="skeleton-line w-20 h-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skeleton-current {
  background: linear-gradient(135deg, #cbd5e1, #94a3b8);
  border-radius: 20px;
  padding: 2rem;
}

.skeleton-line {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  animation: pulse 1.5s ease-in-out infinite;
}

.w-12 { width: 3rem; }
.w-16 { width: 4rem; }
.w-20 { width: 5rem; }
.w-24 { width: 6rem; }
.w-32 { width: 8rem; }
.w-40 { width: 10rem; }
.w-48 { width: 12rem; }
.h-3 { height: 0.75rem; }
.h-4 { height: 1rem; }
.h-5 { height: 1.25rem; }
.h-6 { height: 1.5rem; }
.h-14 { height: 3.5rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-4 { margin-top: 1rem; }
.mb-4 { margin-bottom: 1rem; }

.skeleton-details {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.skeleton-detail-box {
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-forecast {
  padding: 0 0.25rem;
}

.skeleton-forecast-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.skeleton-forecast-day {
  background: #f1f5f9;
  border-radius: 16px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.skeleton-forecast-day .skeleton-line {
  background: #e2e8f0;
}

.skeleton-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #e2e8f0;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
