<template>
  <div class="forecast-section">
    <h3 class="forecast-title">5-Day Forecast</h3>
    <div class="forecast-grid">
      <div v-for="item in items" :key="item.dt" class="forecast-day">
        <span class="forecast-date">{{ formatDate(item.dt) }}</span>
        <img
          :src="iconUrl(item.weather[0].icon)"
          :alt="item.weather[0].description"
          class="forecast-icon"
        />
        <span class="forecast-temp">{{ Math.round(item.main.temp) }}°C</span>
        <span class="forecast-range">
          {{ Math.round(item.main.temp_max) }}° / {{ Math.round(item.main.temp_min) }}°
        </span>
        <span class="forecast-desc">{{ item.weather[0].main }}</span>
        <span class="forecast-meta">💨 {{ item.wind.speed }} m/s</span>
        <span class="forecast-meta">💧 {{ item.main.humidity }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ForecastItem } from '~/composables/useWeather'

defineProps<{
  items: ForecastItem[]
  iconUrl: (code: string) => string
  formatDate: (dt: number) => string
}>()
</script>

<style scoped>
.forecast-section {
  margin-top: 2rem;
}

.forecast-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem;
}

.forecast-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.forecast-day {
  background: #fff;
  border-radius: 16px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.forecast-day:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
}

.forecast-date {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
}

.forecast-icon {
  width: 56px;
  height: 56px;
}

.forecast-temp {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
}

.forecast-range {
  font-size: 0.8rem;
  color: #94a3b8;
}

.forecast-desc {
  font-size: 0.85rem;
  color: #475569;
  text-transform: capitalize;
}

.forecast-meta {
  font-size: 0.75rem;
  color: #94a3b8;
}
</style>
