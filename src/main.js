import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Bodyleft from './components/bodyleft/Bodyleft.vue'

const app = createApp(App)

const router = createRouter({
    history:createWebHistory(),
    routes:[

        {path:'/bodyleft',component:Bodyleft},
        {path:'/~',component:Bodyleft},
    ]

})

app.use(router)
app.mount('#app')
