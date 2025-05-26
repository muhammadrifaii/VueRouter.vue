import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import penjualan from '../views/penjualan.vue';
import pengeluaran from '../views/pengeluaran.vue';
import Laporan from '../views/laporan.vue';
;

const routes = [
  { path: '/', component: Dashboard },
  { path: '/penjualan', component: penjualan },
  { path: '/pengeluaran', component: pengeluaran },
  { path: '/laporan', component: Laporan },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

