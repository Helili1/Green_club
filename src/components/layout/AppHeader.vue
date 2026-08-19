<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="header__logo">
        <span class="header__logo-icon"></span>
        <span class="header__logo-text">Green Club</span>
      </router-link>

      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path"
          class="header__nav-link"
          @click="closeMenu"
        >
          {{ link.title }}
        </router-link>
        
        <button class="header__theme-toggle" @click="toggleTheme" :aria-label="themeLabel">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </nav>

      <!-- Оверлей -->
      <div 
        v-if="isMenuOpen" 
        class="header__overlay"
        @click="closeMenu"
      ></div>

      <button 
        class="header__burger" 
        @click="toggleMenu"
        :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
        :class="{ 'header__burger--active': isMenuOpen }"
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

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Блокируем скролл body, когда меню открыто
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
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
    position: relative;
  }
  
  &__logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    z-index: 101;
    
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
  
  // Оверлей
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    animation: fadeIn 0.3s ease;
  }
  
  &__burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 0.5rem;
    z-index: 101;
    background: none;
    border: none;
    cursor: pointer;
    
    span {
      display: block;
      width: 26px;
      height: 2.5px;
      background-color: var(--text-color);
      border-radius: 2px;
      transition: all 0.3s ease;
      transform-origin: center;
    }
    
    &--active {
      span:nth-child(1) {
        transform: translateY(7.5px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-7.5px) rotate(-45deg);
      }
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .header {
    &__burger {
      display: flex;
    }
    
    &__nav {
      position: fixed;
      top: 0;
      right: 0;
      width: 280px;
      max-width: 80vw;
      height: 100vh;
      background-color: var(--card-bg);
      flex-direction: column;
      align-items: flex-start;
      padding: 5rem 2rem 2rem;
      gap: 1.5rem;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 100;
      box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
      
      &--open {
        transform: translateX(0);
      }
      
      &-link {
        font-size: 1.125rem;
        width: 100%;
        padding: 0.5rem 0;
      }
    }
  }
}
</style>