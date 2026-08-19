<template>
  <div class="academy">
    <!-- Заголовок страницы -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-header__title">Детская академия гольфа</h1>
        <p class="page-header__subtitle">
          Профессиональное обучение для детей от 5 лет. Индивидуальный подход, 
          современные методики и любовь к спорту с первых занятий.
        </p>
      </div>
    </section>

    <!-- Как проходит обучение -->
    <section class="steps section">
      <div class="container">
        <h2 class="section__title">Как проходит обучение</h2>
        <div class="steps__grid">
          <div class="step-card">
            <div class="step-card__number">01</div>
            <h3 class="step-card__title">Оценка уровня</h3>
            <p class="step-card__text">
              На первом занятии тренер оценивает физическую подготовку ребёнка и подбирает оптимальную группу.
            </p>
          </div>
          <div class="step-card">
            <div class="step-card__number">02</div>
            <h3 class="step-card__title">Основы и техника</h3>
            <p class="step-card__text">
              Изучаем правила, этикет и базовую технику удара. Много практики на драйвинг-рейндже и паттинг-грине.
            </p>
          </div>
          <div class="step-card">
            <div class="step-card__number">03</div>
            <h3 class="step-card__title">Игра и турниры</h3>
            <p class="step-card__text">
              Выходим на настоящее поле, участвуем во внутренних соревнованиях и готовимся к городским турнирам.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Модули тренировок -->
    <section class="modules section">
      <div class="container">
        <h2 class="section__title">Группы и расписание</h2>
        <div class="modules__grid">
          <div 
            v-for="module in modules" 
            :key="module.id" 
            class="module-card"
          >
            <div class="module-card__header">
              <span class="module-card__age">{{ module.age }}</span>
              <h3 class="module-card__title">{{ module.title }}</h3>
            </div>
            
            <div class="module-card__body">
              <div class="module-card__info">
                <span class="module-card__label">📅 Расписание:</span>
                <span class="module-card__value">{{ module.schedule }}</span>
              </div>
              <div class="module-card__info">
                <span class="module-card__label">👨‍🏫 Тренер:</span>
                <span class="module-card__value">{{ module.coach }}</span>
              </div>
              <div class="module-card__info">
                <span class="module-card__label">👥 В группе:</span>
                <span class="module-card__value">{{ module.students }} / {{ module.maxStudents }} чел.</span>
              </div>
              
              <div class="module-card__goal">
                <span class="module-card__label">🎯 Текущая цель:</span>
                <p class="module-card__goal-text">{{ module.goal }}</p>
              </div>
            </div>

            <div class="module-card__footer">
              <router-link to="/contacts" class="btn btn--primary btn--full">
                Записаться в группу
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-box">
          <h2 class="cta-box__title">Не уверены, какая группа подойдёт?</h2>
          <p class="cta-box__text">
            Запишитесь на бесплатную пробную тренировку. Тренер проведёт диагностику и поможет выбрать идеальный формат занятий.
          </p>
          <router-link to="/contacts" class="btn btn--primary">
            Записаться на пробное занятие
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TrainingModule {
  id: number
  title: string
  age: string
  schedule: string
  coach: string
  students: number
  maxStudents: number
  goal: string
}

const modules = ref<TrainingModule[]>([
  {
    id: 1,
    title: 'Первые шаги',
    age: '5–7 лет',
    schedule: 'Пн, Ср: 16:00 – 17:00',
    coach: 'Анна Иванова',
    students: 6,
    maxStudents: 8,
    goal: 'Знакомство с инвентарём, базовая стойка, развитие координации и игровая форма обучения.'
  },
  {
    id: 2,
    title: 'Юный гольфист',
    age: '8–12 лет',
    schedule: 'Вт, Чт: 17:00 – 18:30',
    coach: 'Дмитрий Петров',
    students: 5,
    maxStudents: 10,
    goal: 'Отработка полного свинга, правила этикета, первые удары на тренировочном поле (pitch & putt).'
  },
  {
    id: 3,
    title: 'Спортивная группа',
    age: '13–17 лет',
    schedule: 'Пн, Ср, Пт: 18:00 – 20:00',
    coach: 'Сергей Сидоров',
    students: 4,
    maxStudents: 6,
    goal: 'Углублённая тактика игры, работа над слабыми местами, подготовка к городским и региональным турнирам.'
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
  margin-bottom: 3rem;
  color: var(--text-color);
}

.steps {
  background-color: var(--bg-color);
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
}

.step-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  &__number {
    font-size: 3rem;
    font-weight: 800;
    color: var(--primary-color);
    opacity: 0.2;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }
  
  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  &__text {
    color: var(--text-color);
    opacity: 0.8;
    line-height: 1.6;
  }
}

.modules {
  background-color: var(--card-bg);
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
}

.module-card {
  background-color: var(--bg-color);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
  
  &__header {
    background-color: var(--primary-color);
    color: white;
    padding: 1.5rem;
    position: relative;
  }
  
  &__age {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  
  &__title {
    font-size: 1.5rem;
    margin: 0;
  }
  
  &__body {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border-color);
  }
  
  &__label {
    font-weight: 600;
    color: var(--text-color);
    font-size: 0.95rem;
  }
  
  &__value {
    color: var(--text-color);
    opacity: 0.8;
    text-align: right;
  }
  
  &__goal {
    background-color: var(--card-bg);
    padding: 1rem;
    border-radius: 8px;
    margin-top: 0.5rem;
  }
  
  &__goal-text {
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--text-color);
    margin: 0.5rem 0 0 0;
    font-style: italic;
  }
  
  &__footer {
    padding: 1.5rem;
    border-top: 1px solid var(--border-color);
  }
}

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
  
  &--full {
    width: 100%;
    display: block;
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
  
  .steps__grid,
  .modules__grid {
    grid-template-columns: 1fr;
  }
  
  .cta-box {
    padding: 2rem 1.5rem;
    
    &__title {
      font-size: 1.5rem;
    }
  }
}
</style>