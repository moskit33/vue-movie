import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LazyLoadDirective from "./directives/LazyLoadDirective.vue";

const app = createApp(App).use(store).use(router).use(LazyLoadDirective)

app.mount("#app");