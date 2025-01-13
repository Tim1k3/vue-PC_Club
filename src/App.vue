<template>
  <div id="app">
    <!-- Основной компонент Home, который включает весь контент -->
    <Home />
  </div>
</template>

<script>
// Импортируем компонент Home
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
/* Общие стили приложения */
</style>
