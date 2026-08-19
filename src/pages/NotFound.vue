<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <router-link to="/" class="btn">Вернуться на главную</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 6rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--text-color);
  }
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-dark);
  }
}
</style>