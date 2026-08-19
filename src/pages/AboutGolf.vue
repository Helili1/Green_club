<template>
  <div class="about-golf">
    <!-- Заголовок страницы -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-header__title">О гольфе</h1>
        <p class="page-header__subtitle">
          Всё, что нужно знать об этом удивительном виде спорта
        </p>
      </div>
    </section>

    <!-- Список статей -->
    <section class="articles section">
      <div class="container">
        <div class="articles__grid">
          <router-link 
            v-for="article in articles" 
            :key="article.slug" 
            :to="`/about-golf/${article.slug}`"
            class="article-card"
          >
            <div class="article-card__image">
              <img 
              v-if="article.coverImage"
              :src="article.coverImage" 
              :alt="article.title"
              class="article-card__img"
              />
  <span v-else class="article-card__emoji">{{ article.icon }}</span>
</div>
            <div class="article-card__content">
              <h3 class="article-card__title">{{ article.title }}</h3>
              <p class="article-card__description">{{ article.description }}</p>
              <div class="article-card__footer">
                <span class="article-card__read-more">Читать далее →</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-box">
          <h2 class="cta-box__title">Хотите узнать больше?</h2>
          <p class="cta-box__text">
            Запишитесь на пробную тренировку и попробуйте себя в гольфе!
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

interface Article {
  slug: string
  title: string
  description: string
  icon: string
}

const articles = ref<Article[]>([
  {
    slug: 'history',
    title: 'История гольфа',
    description: 'От средневековой Шотландии до современных турниров. Как гольф стал одним из самых популярных видов спорта в мире.',
    icon: '📜',                            
    coverImage: '/history_arc.png'
  },
  {
    slug: 'rules',
    title: 'Правила гольфа',
    description: 'Основные правила игры, подсчёт очков, этикет на поле. Всё, что нужно знать начинающему гольфисту.',
    icon: '📋',                           
    coverImage: '/rules_arc.png' 
  },
  {
    slug: 'equipment',
    title: 'Спортивный инвентарь',
    description: 'Мячи, перчатки, сумки, одежда. Как выбрать правильное снаряжение для комфортной игры.',
    icon: '🎒',                            
    coverImage: '/equipment_arc.png'
  },
  {
    slug: 'clubs',
    title: 'Типы клюшек',
    description: 'Драйверы, вуди, айроны, веджи, паттеры. Разбираемся в многообразии клюшек и их назначении.',
    icon: '🏌️',                            
    coverImage: '/clubs_arc.png'
  },
  {
    slug: 'facts',
    title: '10 интересных фактов',
    description: 'Удивительные факты о гольфе, которые вас удивят. От рекордов до интересных традиций.',
    icon: '💡',                            
    coverImage: '/facts_arc.png'
  },
  {
    slug: 'where-to-train',
    title: 'Где можно тренироваться',
    description: 'Типы полей для гольфа, тренировочные зоны, симуляторы. Где и как лучше всего обучаться.',
    icon: '🌳',                            
    coverImage: '/to_train_arc.png'
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
  }
}

.articles {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
}

.article-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    
    .article-card__image {
      background-color: var(--primary-light);
    }
    
    .article-card__read-more {
      color: var(--primary-color);
    }
  }
  
  &__img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
  
  &__image {
    background-color: var(--primary-color);
    padding: 0rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;
    min-height: 200px;
  }
  
  &__emoji {
    font-size: 4rem;
  }
  
  &__content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  &__description {
    color: var(--text-color);
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex: 1;
  }
  
  &__footer {
    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
  }
  
  &__read-more {
    color: var(--primary-color);
    font-weight: 600;
    transition: color 0.2s;
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
  
  .articles__grid {
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