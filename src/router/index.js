import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home.vue'
import AprendaView from '@/views/AprendaView.vue'
import CalculadoraView from '@/views/CalculadoraView.vue'
import PontosDeColeta from '@/views/PontosDeColeta.vue'
import DashboardsView from '@/views/DashboardsView.vue'

const routes = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/AprendaView', component: AprendaView, name: 'aprenda' },
  { path: '/CalculadoraView', component: CalculadoraView, name: 'calculadora' },
  { path: '/PontosDeColeta', component: PontosDeColeta, name: 'pontos-de-coleta' },
  { path: '/DashboardsView', component: DashboardsView, name: 'dashboards' },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router