<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero__container">
        <div class="hero__content">
          <h1 class="hero__title">
            Добро пожаловать в <span class="hero__highlight">Green Club</span>
          </h1>
          <p class="hero__subtitle">
            Академия гольфа для детей и взрослых. Профессиональные тренеры, 
            современное оборудование и индивидуальный подход к каждому ученику.
          </p>
          <div class="hero__buttons">
            <router-link to="/academy" class="btn btn--primary">
              Записаться на тренировку
            </router-link>
            <router-link to="/about-golf" class="btn btn--secondary">
              Узнать больше о гольфе
            </router-link>
          </div>
        </div>
        <div class="hero__image">
          <div class="hero__image-placeholder">
            <span class="hero__emoji">⛳</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Преимущества -->
    <section class="features section">
      <div class="container">
        <h2 class="section__title">Почему выбирают нас</h2>
        <div class="features__grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-card__icon">{{ feature.icon }}</div>
            <h3 class="feature-card__title">{{ feature.title }}</h3>
            <p class="feature-card__description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- О нас -->
    <section class="about section">
      <div class="container about__container">
        <div class="about__content">
          <h2 class="section__title">О нашей академии</h2>
          <p class="about__text">
            Green Club — это современная академия гольфа, где мы обучаем всех желающих 
            от 7 лет. Наши тренеры — профессиональные игроки с многолетним опытом, 
            которые помогут вам освоить технику игры и полюбить этот удивительный вид спорта.
          </p>
          <p class="about__text">
            Мы предлагаем индивидуальные и групповые занятия, проводим тренировки на 
            открытых полях и в закрытых помещениях. У нас есть всё необходимое оборудование 
            для комфортного обучения.
          </p>
          <router-link to="/coaches" class="btn btn--primary">
            Познакомиться с тренерами
          </router-link>
        </div>
        <div class="about__stats">
          <div class="stat-card">
            <div class="stat-card__number">10+</div>
            <div class="stat-card__label">лет опыта</div>
          </div>
          <div class="stat-card">
            <div class="stat-card__number">500+</div>
            <div class="stat-card__label">учеников</div>
          </div>
          <div class="stat-card">
            <div class="stat-card__number">15</div>
            <div class="stat-card__label">тренеров</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta section">
      <div class="container cta__container">
        <h2 class="cta__title">Готовы начать?</h2>
        <p class="cta__text">
          Запишитесь на пробную тренировку прямо сейчас и получите скидку 20% 
          на первое занятие!
        </p>
        <router-link to="/contacts" class="btn btn--primary btn--large">
          Связаться с нами
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Feature {
  icon: string
  title: string
  description: string
}

const features = ref<Feature[]>([
  {
    icon: '👨‍🏫',
    title: 'Профессиональные тренеры',
    description: 'Наши тренеры — сертифицированные специалисты с опытом работы более 10 лет'
  },
  {
    icon: '🎯',
    title: 'Индивидуальный подход',
    description: 'Программа обучения адаптируется под ваш уровень и цели'
  },
  {
    icon: '🏌️',
    title: 'Современное оборудование',
    description: 'Используем только качественное оборудование ведущих мировых брендов'
  },
  {
    icon: '🌳',
    title: 'Отличные условия',
    description: 'Тренировки на открытых полях и в закрытых помещениях круглый год'
  }
])
</script>

<style scoped lang="scss">
.hero {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  &__title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  
  &__highlight {
    color: #ffd700;
  }
  
  &__subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.95;
  }
  
  &__buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  &__image-placeholder {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
  }
  
  &__emoji {
    font-size: 8rem;
  }
}

.section {
  &__title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--text-color);
  }
}

.features {
  background-color: var(--bg-color);
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
}

.feature-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid var(--border-color);
  
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
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  &__description {
    color: var(--text-color);
    opacity: 0.8;
    line-height: 1.6;
  }
}

.about {
  background-color: var(--card-bg);
  
  &__container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  &__text {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
  
  &__stats {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}

.stat-card {
  background-color: var(--primary-color);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  
  &__number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  &__label {
    font-size: 1.125rem;
    opacity: 0.9;
  }
}

.cta {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  text-align: center;
  
  &__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  &__text {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.95;
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
  
  &--secondary {
    background-color: transparent;
    color: white;
    border-color: white;
    
    &:hover {
      background-color: white;
      color: var(--primary-color);
    }
  }
  
  &--large {
    padding: 1.125rem 3rem;
    font-size: 1.125rem;
  }
}

@media (max-width: 768px) {
  .hero {
    &__container {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    &__title {
      font-size: 2rem;
    }
    
    &__subtitle {
      font-size: 1.125rem;
    }
    
    &__buttons {
      justify-content: center;
    }
    
    &__image-placeholder {
      max-width: 250px;
    }
    
    &__emoji {
      font-size: 5rem;
    }
  }
  
  .section__title {
    font-size: 2rem;
  }
  
  .about__container {
    grid-template-columns: 1fr;
  }
  
  .about__stats {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .stat-card {
    flex: 1;
    min-width: 150px;
  }
  
  .cta__title {
    font-size: 2rem;
  }
}
</style>