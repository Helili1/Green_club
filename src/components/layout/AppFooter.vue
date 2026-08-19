<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__content">
        <div class="footer__brand">
          <div class="footer__logo">
            <span class="footer__logo-icon">⛳</span>
            <span class="footer__logo-text">Green Club</span>
          </div>
          <p class="footer__description">
            Академия гольфа для детей и взрослых. Профессиональные тренеры, современное оборудование.
          </p>
        </div>
        
        <div class="footer__links">
          <h4 class="footer__title">Навигация</h4>
          <nav class="footer__nav">
            <router-link to="/">Главная</router-link>
            <router-link to="/about-golf">О гольфе</router-link>
            <router-link to="/academy">Академия</router-link>
            <router-link to="/contacts">Контакты</router-link>
          </nav>
        </div>
        
        <div class="footer__contacts">
          <h4 class="footer__title">Контакты</h4>
          <p>📍 г. Новочеркасск, ул. Примерная, 17</p>
          <p>📞 +7 (888) 555-35-35</p>
          <p>✉️ info@greenclub.ru</p>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p>&copy; 2026 Green Club. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.footer {
  background-color: var(--card-bg);
  border-top: 1px solid var(--border-color);
  margin-top: auto;
  
  &__container {
    padding: 3rem 1.5rem 1.5rem;
  }
  
  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  &__logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1rem;
    
    &-icon {
      font-size: 1.75rem;
    }
  }
  
  &__description {
    color: var(--text-color);
    opacity: 0.8;
    line-height: 1.6;
  }
  
  &__title {
    font-size: 1.125rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  &__nav {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    a {
      transition: color 0.2s;
      
      &:hover {
        color: var(--primary-color);
      }
    }
  }
  
  &__contacts {
    p {
      margin-bottom: 0.5rem;
    }
  }
  
  &__bottom {
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    opacity: 0.7;
  }
}
</style>