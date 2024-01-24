import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import landingPage from './views/landingPage.vue'
import itemView from './views/itemView.vue'
import profileView from './views/profileView.vue'


import App from './App.vue'
import './assets/index.css'

const routes = [
    { path: '/', component: landingPage },
    { path: '/item', component: itemView },
    { path: '/profile', component: profileView },
]  

const router = createRouter({
history: createWebHashHistory(),
routes,
})
const app = createApp(App);
app.use(router)

app.mount('#app')
