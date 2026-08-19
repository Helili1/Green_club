<template>
  <div class="schedule">
    <!-- Заголовок страницы -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-header__title">Расписание тренировок</h1>
        <p class="page-header__subtitle">
          Актуальное расписание занятий в крытом манеже и на открытых полях
        </p>
      </div>
    </section>

    <!-- Таблица расписания -->
    <section class="schedule-table-section section">
      <div class="container">
        <h2 class="section__title">График занятий на неделю</h2>
        
        <div class="table-wrapper">
          <table class="schedule-table">
            <thead>
              <tr>
                <th>День</th>
                <th>Время</th>
                <th>Группа</th>
                <th>Место проведения</th>
                <th>Тренер</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in schedule" :key="index">
                <td class="day-cell">
                  <span class="day-name">{{ item.day }}</span>
                </td>
                <td class="time-cell">{{ item.time }}</td>
                <td>
                  <span class="badge" :class="`badge--${item.level}`">
                    {{ item.group }}
                  </span>
                </td>
                <td class="location-cell">{{ item.location }}</td>
                <td class="coach-cell">{{ item.coach }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="schedule-note">
          * Расписание может корректироваться в зависимости от погодных условий (для открытых полей). Следите за обновлениями в нашем Telegram-канале.
        </p>
      </div>
    </section>

    <!-- Локации и карта -->
    <section class="locations-section section">
      <div class="container">
        <h2 class="section__title">Где мы тренируемся</h2>
        
        <div class="locations-grid">
          <!-- Карточки локаций -->
          <div class="locations-list">
            <div v-for="loc in locations" :key="loc.id" class="location-card">
              <div class="location-card__icon">📍</div>
              <h3 class="location-card__title">{{ loc.name }}</h3>
              <p class="location-card__address">{{ loc.address }}</p>
              <p class="location-card__desc">{{ loc.description }}</p>
              <a :href="loc.mapLink" target="_blank" class="location-card__link">
                Построить маршрут →
              </a>
            </div>
          </div>

          <!-- Блок карты (Placeholder для iframe) -->
          <div class="map-container">
            <!-- 
              СЮДА МОЖНО ВСТАВИТЬ IFRAME КАРТЫ (Яндекс или Google). 
              Пример для Яндекс.Карт:
              <iframe src="https://yandex.ru/map-widget/v1/?..." width="100%" height="100%" frameborder="0"></iframe>
            -->
            <div class="map-placeholder">
              <div class="map-placeholder__content">
                <span class="map-placeholder__icon">🗺️</span>
                <p>Интерактивная карта</p>
                <span class="map-placeholder__hint">
                  (Здесь будет iframe Яндекс.Карт или Google Maps)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-box">
          <h2 class="cta-box__title">Остались вопросы по расписанию?</h2>
          <p class="cta-box__text">
            Свяжитесь с нами, и мы подберём удобное время для пробного занятия.
          </p>
          <router-link to="/contacts" class="btn btn--primary">
            Связаться с администратором
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ScheduleItem {
  day: string
  time: string
  group: string
  level: 'beginner' | 'intermediate' | 'advanced'
  location: string
  coach: string
}

interface Location {
  id: number
  name: string
  address: string
  description: string
  mapLink: string
}

const schedule = ref<ScheduleItem[]>([
  { day: 'Понедельник', time: '16:00 – 17:00', group: 'Первые шаги (5-7 лет)', level: 'beginner', location: 'Крытый манеж', coach: 'Анна Иванова' },
  { day: 'Понедельник', time: '18:00 – 20:00', group: 'Спортивная группа', level: 'advanced', location: 'Поле "Зелёная долина"', coach: 'Сергей Сидоров' },
  { day: 'Вторник', time: '17:00 – 18:30', group: 'Юный гольфист (8-12 лет)', level: 'intermediate', location: 'Крытый манеж', coach: 'Дмитрий Петров' },
  { day: 'Среда', time: '16:00 – 17:00', group: 'Первые шаги (5-7 лет)', level: 'beginner', location: 'Крытый манеж', coach: 'Анна Иванова' },
  { day: 'Среда', time: '18:00 – 20:00', group: 'Спортивная группа', level: 'advanced', location: 'Поле "Зелёная долина"', coach: 'Сергей Сидоров' },
  { day: 'Четверг', time: '17:00 – 18:30', group: 'Юный гольфист (8-12 лет)', level: 'intermediate', location: 'Крытый манеж', coach: 'Дмитрий Петров' },
  { day: 'Суббота', time: '10:00 – 13:00', group: 'Сборная школы (все возрасты)', level: 'advanced', location: 'Поле "Зелёная долина"', coach: 'Сергей Сидоров' },
])

const locations = ref<Location[]>([
  {
    id: 1,
    name: 'Крытый манеж "Green Club"',
    address: 'г. Новочеркасск, ул. Спортивная, 17',
    description: 'Основная база для тренировок в холодное время года и для начального обучения. Оборудована симуляторами и паттинг-грином.',
    mapLink: 'https://yandex.ru/maps'
  },
  {
    id: 2,
    name: 'Поле "Зелёная долина"',
    address: 'Ростовская обл., 15 км от Новочеркасска, пос. Донской',
    description: 'Полноценное поле на 9 лунок с драйвинг-рейнджем. Тренировки проходят здесь с апреля по октябрь при хорошей погоде.',
    mapLink: 'https://yandex.ru/maps'
  }
])
</script>

<style scoped lang="scss">
.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  
  &__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  &__subtitle {
    font-size: 1.25rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto;
  }
}

.section__title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

// Таблица
.table-wrapper {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background-color: var(--card-bg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 700px; // Чтобы на мобильном можно было скроллить
  
  th, td {
    padding: 1.25rem 1.5rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }
  
  th {
    background-color: var(--primary-color);
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  tr:hover td {
    background-color: rgba(var(--primary-color-rgb, 58, 125, 68), 0.05);
  }
  
  .day-cell {
    font-weight: 600;
    color: var(--primary-color);
  }
  
  .time-cell {
    white-space: nowrap;
    font-weight: 500;
  }
  
  .badge {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    
    &--beginner {
      background-color: rgba(74, 157, 90, 0.15);
      color: var(--primary-color);
    }
    
    &--intermediate {
      background-color: rgba(255, 193, 7, 0.15);
      color: #b38600;
    }
    
    &--advanced {
      background-color: rgba(220, 53, 69, 0.15);
      color: #dc3545;
    }
  }
}

.schedule-note {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.7;
  font-style: italic;
  text-align: center;
}

// Локации и карта
.locations-section {
  background-color: var(--card-bg);
}

.locations-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  align-items: start;
}

.locations-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.location-card {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  &__icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  &__title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }
  
  &__address {
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }
  
  &__desc {
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--text-color);
    opacity: 0.8;
    margin-bottom: 1rem;
  }
  
  &__link {
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.7;
    }
  }
}

.map-container {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  height: 100%;
  min-height: 400px;
  background-color: var(--bg-color);
}

.map-placeholder {
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-gray, #f0f0f0);
  
  &__content {
    text-align: center;
    color: var(--text-color);
    opacity: 0.6;
  }
  
  &__icon {
    font-size: 4rem;
    display: block;
    margin-bottom: 1rem;
  }
  
  &__hint {
    display: block;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
}

// CTA
.cta-section {
  background-color: var(--bg-color);
}

.cta-box {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  
  &__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  &__text {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.95;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  border: 2px solid transparent;
  
  &--primary {
    background-color: white;
    color: var(--primary-color);
    
    &:hover {
      background-color: transparent;
      color: white;
      border-color: white;
    }
  }
}

// Адаптивность
@media (max-width: 900px) {
  .locations-grid {
    grid-template-columns: 1fr;
  }
  
  .map-container {
    min-height: 300px;
    order: -1; // Карта сверху на планшетах
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 0;
    
    &__title {
      font-size: 2rem;
    }
    
    &__subtitle {
      font-size: 1.125rem;
    }
  }
  
  .section__title {
    font-size: 2rem;
  }
  
  .cta-box {
    padding: 2rem 1.5rem;
    
    &__title {
      font-size: 1.5rem;
    }
  }
}
</style>