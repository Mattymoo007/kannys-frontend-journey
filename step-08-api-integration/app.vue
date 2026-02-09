<template>
  <div class="app">
    <header class="app-header">
      <h1 class="app-title">🌤️ Weather Dashboard</h1>
      <p class="app-subtitle">Real-time weather data from around the world</p>
      <SearchBar v-model="city" :disabled="isLoading" @search="search" />
    </header>

    <main class="app-main">
      <!-- Quick-access city chips -->
      <div class="quick-cities">
        <button
          v-for="c in quickCities"
          :key="c"
          class="chip"
          :class="{ active: weather?.name?.toLowerCase() === c.toLowerCase() }"
          :disabled="isLoading"
          @click="search(c)"
        >
          {{ c }}
        </button>
      </div>

      <!-- Error state -->
      <ErrorAlert
        v-if="error && !isLoading"
        :message="error"
        @dismiss="error = null"
      />

      <!-- Loading skeleton -->
      <LoadingSkeleton v-if="isLoading" />

      <!-- Results -->
      <template v-if="!isLoading && weather">
        <CurrentWeatherCard
          :data="weather"
          :icon-url="iconUrl"
          :format-date="formatDate"
          :wind-direction="windDirection"
        />

        <ForecastCard
          v-if="forecast?.list"
          :items="dailyForecast(forecast.list)"
          :icon-url="iconUrl"
          :format-date="formatDate"
        />
      </template>

      <!-- Empty state (before first search) -->
      <div v-if="!isLoading && !weather && !error" class="empty-state">
        <span class="empty-icon">🔍</span>
        <p>Search for a city to see its weather</p>
      </div>
    </main>

    <footer class="app-footer">
      Powered by <a href="https://openweathermap.org/" target="_blank" rel="noopener">OpenWeatherMap</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
const {
  city,
  weather,
  forecast,
  isLoading,
  error,
  search,
  iconUrl,
  formatDate,
  windDirection,
  dailyForecast,
} = useWeather()

const quickCities = ['London', 'New York', 'Tokyo', 'Sydney', 'Paris']
</script>

<style>
/* ── Global reset & base ── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: #f0f4f8;
  color: #1e293b;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
</style>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── Header ── */
.app-header {
  text-align: center;
  padding: 2.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.app-title {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.app-subtitle {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

/* ── Main ── */
.app-main {
  flex: 1;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* ── Quick city chips ── */
.quick-cities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.chip {
  padding: 0.4rem 1rem;
  border: 1.5px solid #e2e8f0;
  border-radius: 999px;
  background: #fff;
  color: #475569;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}

.chip:hover:not(:disabled) {
  border-color: #3b82f6;
  color: #3b82f6;
  background: #eff6ff;
}

.chip.active {
  border-color: #3b82f6;
  background: #3b82f6;
  color: #fff;
}

.chip:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── Empty state ── */
.empty-state {
  text-align: center;
  padding: 4rem 1rem;
  color: #94a3b8;
}

.empty-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 0.75rem;
}

/* ── Footer ── */
.app-footer {
  text-align: center;
  padding: 1.5rem;
  color: #94a3b8;
  font-size: 0.8rem;
}

.app-footer a {
  color: #3b82f6;
  text-decoration: none;
}

.app-footer a:hover {
  text-decoration: underline;
}
</style>
