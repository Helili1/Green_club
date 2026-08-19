<template>
  <div class="article-page" v-if="article">
    <!-- Хлебные крошки -->
    <div class="breadcrumbs">
      <div class="container">
        <router-link to="/" class="breadcrumbs__link">Главная</router-link>
        <span class="breadcrumbs__separator">/</span>
        <router-link to="/about-golf" class="breadcrumbs__link">О гольфе</router-link>
        <span class="breadcrumbs__separator">/</span>
        <span class="breadcrumbs__current">{{ article.title }}</span>
      </div>
    </div>

    <!-- Заголовок статьи -->
    <section class="article-header">
      <div class="container">
        <div class="article-header__icon">{{ article.icon }}</div>
        <h1 class="article-header__title">{{ article.title }}</h1>
        <p class="article-header__description">{{ article.description }}</p>
      </div>
    </section>

    <!-- Контент статьи -->
    <article class="article-content section">
      <div class="container">
        <div class="article-content__wrapper">
          <template v-for="(section, index) in article.content" :key="index">
            <!-- Заголовок -->
            <h2 v-if="section.type === 'heading'" class="content-heading">
              {{ section.text }}
            </h2>

            <!-- Параграф -->
            <p v-else-if="section.type === 'paragraph'" class="content-paragraph">
              {{ section.text }}
            </p>

            <!-- Изображение -->
            <figure v-else-if="section.type === 'image'" class="content-image">
              <img :src="section.src" :alt="section.alt" />
              <figcaption v-if="section.caption">{{ section.caption }}</figcaption>
            </figure>

            <!-- Список -->
            <ul v-else-if="section.type === 'list'" class="content-list">
              <li v-for="(item, i) in section.items" :key="i" class="content-list__item">
                {{ item }}
              </li>
            </ul>

            <!-- Факты -->
            <div v-else-if="section.type === 'facts'" class="content-facts">
              <div v-for="(fact, i) in section.items" :key="i" class="fact-card">
                <h3 class="fact-card__title">{{ fact.title }}</h3>
                <p class="fact-card__text">{{ fact.text }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </article>

    <!-- Навигация между статьями -->
    <nav class="article-nav section">
      <div class="container">
        <div class="article-nav__wrapper">
          <router-link 
            v-if="adjacent.prev" 
            :to="`/about-golf/${adjacent.prev.slug}`"
            class="article-nav__link article-nav__link--prev"
          >
            <span class="article-nav__label">← Предыдущая</span>
            <span class="article-nav__title">{{ adjacent.prev.title }}</span>
          </router-link>
          <div v-else></div>

          <router-link 
            v-if="adjacent.next" 
            :to="`/about-golf/${adjacent.next.slug}`"
            class="article-nav__link article-nav__link--next"
          >
            <span class="article-nav__label">Следующая →</span>
            <span class="article-nav__title">{{ adjacent.next.title }}</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>

  <!-- Если статья не найдена -->
  <div v-else class="not-found section">
    <div class="container">
      <h1>Статья не найдена</h1>
      <p>К сожалению, такой статьи не существует.</p>
      <router-link to="/about-golf" class="btn btn--primary">
        Вернуться к списку статей
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleBySlug, getAdjacentArticles } from '../data/article.ts'

const route = useRoute()

// Получаем slug из URL
const slug = computed(() => route.params.slug as string)

// Получаем статью
const article = computed(() => getArticleBySlug(slug.value))

// Получаем соседние статьи для навигации
const adjacent = computed(() => getAdjacentArticles(slug.value))


console.log('🔍 Текущий slug из URL:', slug.value)
console.log('📄 Найденная статья:', article.value)
</script>

<style scoped lang="scss">
.breadcrumbs {
  padding: 1.5rem 0;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  font-size: 0.875rem;

  .container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  &__link {
    color: var(--primary-color);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  &__separator {
    color: var(--text-color);
    opacity: 0.5;
  }

  &__current {
    color: var(--text-color);
    opacity: 0.8;
  }
}

.article-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;

  &__icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  &__description {
    font-size: 1.25rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto;
  }
}

.article-content {
  &__wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
}

.content-heading {
  font-size: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);

  &:first-child {
    margin-top: 0;
  }
}

.content-paragraph {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.content-image {
  margin: 2rem 0;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  figcaption {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    color: var(--text-color);
    opacity: 0.7;
    font-style: italic;
  }
}

.content-list {
  margin: 1.5rem 0;
  padding-left: 0;

  &__item {
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    margin-bottom: 0.5rem;
    background-color: var(--card-bg);
    border-left: 3px solid var(--primary-color);
    border-radius: 4px;
    position: relative;
    line-height: 1.6;

    &::before {
      content: '✓';
      position: absolute;
      left: 1rem;
      color: var(--primary-color);
      font-weight: 700;
    }
  }
}

.content-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.fact-card {
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &__title {
    font-size: 1.25rem;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
  }

  &__text {
    line-height: 1.6;
    color: var(--text-color);
  }
}

.article-nav {
  background-color: var(--card-bg);
  border-top: 1px solid var(--border-color);

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  &__link {
    padding: 1.5rem;
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &:hover {
      border-color: var(--primary-color);
      transform: translateY(-2px);
    }

    &--next {
      text-align: right;
    }
  }

  &__label {
    font-size: 0.875rem;
    color: var(--primary-color);
    font-weight: 600;
  }

  &__title {
    font-size: 1.125rem;
    color: var(--text-color);
    font-weight: 600;
  }
}

.not-found {
  text-align: center;
  padding: 4rem 0;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    color: var(--text-color);
    opacity: 0.8;
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
    background-color: var(--primary-color);
    color: white;

    &:hover {
      background-color: var(--primary-dark);
    }
  }
}

@media (max-width: 768px) {
  .article-header {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__description {
      font-size: 1.125rem;
    }
  }

  .content-heading {
    font-size: 1.5rem;
  }

  .content-paragraph {
    font-size: 1rem;
  }

  .article-nav__wrapper {
    grid-template-columns: 1fr;
  }
}
</style>