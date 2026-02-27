import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// ____________________main page___________________________
import Bodyleft from './components/bodyleft/Bodyleft.vue'
import Bodyright from './components/bodyright/Bodyright.vue'
import Setting from './components/setting/Setting.vue'
// ____________________sub page___________________________
import Evaluate from './components/bodyright/evaluate/Evaluate.vue'
const app = createApp(App)

const router = createRouter({
    history:createWebHistory(),
    routes:[

        {path:'/',component:Evaluate},
        
    ]

})
app.component("Bodyright",Bodyright)
app.component("Bodyleft",Bodyleft)
app.component("Setting",Setting)
app.use(router)
app.mount('#app')
