<template>
  <div class="coaches">
    <!-- Заголовок страницы -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-header__title">Наши тренеры</h1>
        <p class="page-header__subtitle">
          Профессионалы с международным опытом и любовью к детям. 
          Каждый тренер — действующий игрок с многолетним стажем преподавания.
        </p>
      </div>
    </section>

    <!-- Принципы работы -->
    <section class="principles section">
      <div class="container">
        <h2 class="section__title">Наши принципы работы</h2>
        <div class="principles__grid">
          <div class="principle-card">
            <div class="principle-card__icon">🎓</div>
            <h3 class="principle-card__title">Сертификация</h3>
            <p class="principle-card__text">
              Все тренеры имеют международные сертификаты PGA и регулярно проходят повышение квалификации.
            </p>
          </div>
          <div class="principle-card">
            <div class="principle-card__icon">❤️</div>
            <h3 class="principle-card__title">Любовь к детям</h3>
            <p class="principle-card__text">
              Мы подбираем тренеров не только по навыкам, но и по умению находить общий язык с ребёнком.
            </p>
          </div>
          <div class="principle-card">
            <div class="principle-card__icon">📈</div>
            <h3 class="principle-card__title">Результат</h3>
            <p class="principle-card__text">
              Наши ученики регулярно занимают призовые места на городских и региональных турнирах.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Карточки тренеров -->
    <section class="coaches-list section">
      <div class="container">
        <h2 class="section__title">Команда тренеров</h2>
        <div class="coaches-grid">
          <div 
            v-for="coach in coaches" 
            :key="coach.id" 
            class="coach-card"
          >
            <div class="coach-card__photo">
              <img 
                v-if="coach.photo" 
                :src="coach.photo" 
                :alt="coach.name"
                class="coach-card__img"
              />
              <div v-else class="coach-card__photo-placeholder">
                <span>{{ coach.initials }}</span>
              </div>
            </div>

            <div class="coach-card__body">
              <h3 class="coach-card__name">{{ coach.name }}</h3>
              <p class="coach-card__role">{{ coach.role }}</p>

              <div class="coach-card__stats">
                <div class="coach-card__stat">
                  <span class="coach-card__stat-value">{{ coach.experience }}</span>
                  <span class="coach-card__stat-label">лет опыта</span>
                </div>
                <div class="coach-card__stat">
                  <span class="coach-card__stat-value">{{ coach.studentsCount }}+</span>
                  <span class="coach-card__stat-label">учеников</span>
                </div>
              </div>

              <p class="coach-card__bio">{{ coach.bio }}</p>

              <div class="coach-card__achievements" v-if="coach.achievements.length">
                <h4 class="coach-card__achievements-title">Достижения:</h4>
                <ul class="coach-card__achievements-list">
                  <li v-for="(achievement, i) in coach.achievements" :key="i">
                    {{ achievement }}
                  </li>
                </ul>
              </div>

              <div class="coach-card__groups">
                <span class="coach-card__groups-label">Ведёт группы:</span>
                <div class="coach-card__groups-list">
                  <span 
                    v-for="(group, i) in coach.groups" 
                    :key="i" 
                    class="coach-card__group-badge"
                  >
                    {{ group }}
                  </span>
                </div>
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
          <h2 class="cta-box__title">Хотите записаться к конкретному тренеру?</h2>
          <p class="cta-box__text">
            Оставьте заявку, и мы подберём удобное время для первого занятия с выбранным тренером.
          </p>
          <router-link to="/contacts" class="btn btn--primary">
            Связаться с нами
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Coach {
  id: number
  name: string
  initials: string
  role: string
  photo?: string
  experience: number
  studentsCount: number
  bio: string
  achievements: string[]
  groups: string[]
}

const coaches = ref<Coach[]>([
  {
    id: 1,
    name: 'Анна Иванова',
    initials: 'АИ',
    role: 'Старший тренер детской группы',
    // photo: '/images/coaches/anna.jpg', // раскомментируй, когда добавишь фото
    experience: 12,
    studentsCount: 200,
    bio: 'Специализируется на обучении самых маленьких гольфистов. Умеет превращать сложные упражнения в увлекательную игру, благодаря чему дети занимаются с удовольствием.',
    achievements: [
      'Мастер спорта по гольфу',
      'Сертификат PGA Level 2',
      'Лучший детский тренер региона 2023'
    ],
    groups: ['Первые шаги (5-7 лет)']
  },
  {
    id: 2,
    name: 'Дмитрий Петров',
    initials: 'ДП',
    role: 'Тренер средней группы',
    experience: 8,
    studentsCount: 150,
    bio: 'Бывший участник национальной сборной. Дмитрий делает акцент на правильной технике с первых занятий, что позволяет ученикам быстро прогрессировать и избегать травм.',
    achievements: [
      'Кандидат в мастера спорта',
      'Призёр чемпионата России 2018',
      'Сертификат European Golf Association'
    ],
    groups: ['Юный гольфист (8-12 лет)']
  },
  {
    id: 3,
    name: 'Сергей Сидоров',
    initials: 'СС',
    role: 'Главный тренер, руководитель спортивной подготовки',
    experience: 18,
    studentsCount: 300,
    bio: 'Ведёт подготовку спортсменов высокого уровня. Под его руководством ученики академии регулярно становятся призёрами региональных и всероссийских турниров.',
    achievements: [
      'Мастер спорта международного класса',
      'Участник European Tour',
      'Тренер сборной области',
      'Более 30 победителей разрядов среди учеников'
    ],
    groups: ['Спортивная группа (13-17 лет)', 'Сборная школы']
  },
  {
    id: 4,
    name: 'Елена Кузнецова',
    initials: 'ЕК',
    role: 'Тренер по физической подготовке',
    experience: 10,
    studentsCount: 180,
    bio: 'Отвечает за ОФП и специальную физическую подготовку юных гольфистов. Разрабатывает программы, которые помогают развивать нужные мышцы и предотвращать травмы.',
    achievements: [
      'Диплом спортивного факультета РГУФК',
      'Сертифицированный специалист по детской физиологии',
      'Автор методики "ГольфФит для детей"'
    ],
    groups: ['Все возрастные группы (ОФП)']
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

// Принципы
.principles {
  background-color: var(--bg-color);
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
}

.principle-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  &__icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  &__title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: var(--text-color);
  }
  
  &__text {
    color: var(--text-color);
    opacity: 0.8;
    line-height: 1.6;
  }
}

// Карточки тренеров
.coaches-list {
  background-color: var(--card-bg);
}

.coaches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.coach-card {
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
    
    .coach-card__photo img,
    .coach-card__photo-placeholder {
      transform: scale(1.05);
    }
  }
  
  &__photo {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    background-color: var(--primary-color);
    
    img, &-placeholder {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s;
    }
  }
  
  &__photo-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
    color: white;
    font-size: 4rem;
    font-weight: 700;
  }
  
  &__body {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  &__name {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
    color: var(--text-color);
  }
  
  &__role {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
  
  &__stats {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 0;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 1rem;
  }
  
  &__stat {
    display: flex;
    flex-direction: column;
  }
  
  &__stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
  }
  
  &__stat-label {
    font-size: 0.85rem;
    color: var(--text-color);
    opacity: 0.7;
  }
  
  &__bio {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-color);
    opacity: 0.85;
    margin-bottom: 1rem;
  }
  
  &__achievements {
    margin-bottom: 1rem;
  }
  
  &__achievements-title {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }
  
  &__achievements-list {
    list-style: none;
    padding: 0;
    
    li {
      padding: 0.4rem 0 0.4rem 1.5rem;
      position: relative;
      font-size: 0.9rem;
      color: var(--text-color);
      opacity: 0.85;
      line-height: 1.4;
      
      &::before {
        content: '🏆';
        position: absolute;
        left: 0;
        top: 0.4rem;
        font-size: 0.85rem;
      }
    }
  }
  
  &__groups {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
  }
  
  &__groups-label {
    font-size: 0.85rem;
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  &__groups-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  &__group-badge {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    background-color: rgba(74, 157, 90, 0.15);
    color: var(--primary-color);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
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
  
  .coaches-grid {
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