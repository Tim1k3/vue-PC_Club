import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router'; // если используете Vue Router

const app = createApp(App);

app.use(createPinia()); // подключение Pinia
app.use(router); // подключение Vue Router, если используется
app.mount('#app');
