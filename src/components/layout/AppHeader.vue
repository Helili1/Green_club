<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="header__logo">
        <span class="header__logo-icon">⛳</span>
        <span class="header__logo-text">Green Club</span>
      </router-link>

      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path"
          class="header__nav-link"
          @click="isMenuOpen = false"
        >
          {{ link.title }}
        </router-link>
        
        <button class="header__theme-toggle" @click="toggleTheme" :aria-label="themeLabel">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </nav>

      <button 
        class="header__burger" 
        @click="isMenuOpen = !isMenuOpen"
        :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface NavLink {
  path: string
  title: string
}

const navLinks: NavLink[] = [
  { path: '/', title: 'Главная' },
  { path: '/about-golf', title: 'О гольфе' },
  { path: '/academy', title: 'Академия' },
  { path: '/schedule', title: 'Расписание' },
  { path: '/coaches', title: 'Тренеры' },
  { path: '/contacts', title: 'Контакты' }
]

const isMenuOpen = ref(false)
const isDark = ref(false)

const themeLabel = computed(() => isDark.value ? 'Светлая тема' : 'Тёмная тема')

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})
</script>

<style scoped lang="scss">
.header {
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }
  
  &__logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    
    &-icon {
      font-size: 1.75rem;
    }
  }
  
  &__nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    
    &-link {
      font-weight: 500;
      transition: color 0.2s;
      
      &:hover {
        color: var(--primary-color);
      }
      
      &.router-link-active {
        color: var(--primary-color);
      }
    }
  }
  
  &__theme-toggle {
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: var(--border-color);
    }
  }
  
  &__burger {
    display: none;
    flex-direction: column;
    gap: 4px;
    padding: 0.5rem;
    
    span {
      width: 24px;
      height: 2px;
      background-color: var(--text-color);
      transition: transform 0.3s;
    }
  }
}

@media (max-width: 768px) {
  .header {
    &__burger {
      display: flex;
    }
    
    &__nav {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background-color: var(--card-bg);
      flex-direction: column;
      padding: 2rem;
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s, opacity 0.3s;
      
      &--open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }
    }
  }
}
</style>