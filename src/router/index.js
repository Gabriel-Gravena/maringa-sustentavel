import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home.vue'
import AprendaView from '@/views/AprendaView.vue'
import CalculadoraView from '@/views/CalculadoraView.vue'
import PontosDeColeta from '@/views/PontosDeColeta.vue'

const routes = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/aprenda', component: AprendaView, name: 'aprenda' },
  { path: '/calculadora', component: CalculadoraView, name: 'calculadora' },
  { path: '/pontos-de-coleta', component: PontosDeColeta, name: 'pontos-de-coleta' },
]

const scrollBehavior = (to, from, savedPosition) => {
    return { top: 0, left: 0, behavior: 'smooth' }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router