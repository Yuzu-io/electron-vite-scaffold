import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router';

// 初始化样式
import './styles/reset.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
