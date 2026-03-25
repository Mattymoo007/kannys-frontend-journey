<template>
  <div class="current-card">
    <div class="current-header">
      <div>
        <h2 class="city-name">{{ data.name }}, {{ data.sys.country }}</h2>
        <p class="date">{{ formatDate(data.dt, data.timezone) }}</p>
      </div>
      <img
        :src="iconUrl(data.weather[0].icon)"
        :alt="data.weather[0].description"
        class="weather-icon-lg"
      />
    </div>

    <div class="current-body">
      <div class="temp-block">
        <span class="temp-main">{{ Math.round(data.main.temp) }}°C</span>
        <span class="temp-desc">{{ data.weather[0].description }}</span>
        <span class="temp-feels">Feels like {{ Math.round(data.main.feels_like) }}°C</span>
      </div>

      <div class="details-grid">
        <div class="detail">
          <span class="detail-label">💧 Humidity</span>
          <span class="detail-value">{{ data.main.humidity }}%</span>
        </div>
        <div class="detail">
          <span class="detail-label">💨 Wind</span>
          <span class="detail-value">{{ data.wind.speed }} m/s {{ windDirection(data.wind.deg) }}</span>
        </div>
        <div class="detail">
          <span class="detail-label">🌡️ Pressure</span>
          <span class="detail-value">{{ data.main.pressure }} hPa</span>
        </div>
        <div class="detail">
          <span class="detail-label">👁️ Visibility</span>
          <span class="detail-value">{{ (data.visibility / 1000).toFixed(1) }} km</span>
        </div>
        <div class="detail">
          <span class="detail-label">☁️ Clouds</span>
          <span class="detail-value">{{ data.clouds.all }}%</span>
        </div>
        <div class="detail">
          <span class="detail-label">🌡️ Hi / Lo</span>
          <span class="detail-value">{{ Math.round(data.main.temp_max) }}° / {{ Math.round(data.main.temp_min) }}°</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CurrentWeather } from '~/composables/useWeather'

defineProps<{
  data: CurrentWeather
  iconUrl: (code: string) => string
  formatDate: (dt: number, tz: number) => string
  windDirection: (deg: number) => string
}>()
</script>

<style scoped>
.current-card {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border-radius: 20px;
  padding: 2rem;
  color: #fff;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.3);
}

.current-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.city-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.date {
  margin: 0.25rem 0 0;
  opacity: 0.8;
  font-size: 0.9rem;
}

.weather-icon-lg {
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
}

.current-body {
  margin-top: 1rem;
}

.temp-block {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin-bottom: 1.5rem;
}

.temp-main {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
}

.temp-desc {
  font-size: 1.1rem;
  text-transform: capitalize;
  opacity: 0.9;
}

.temp-feels {
  font-size: 0.85rem;
  opacity: 0.7;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}

.detail {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-label {
  font-size: 0.75rem;
  opacity: 0.8;
}

.detail-value {
  font-size: 1rem;
  font-weight: 600;
}
</style>
