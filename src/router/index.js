import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Penjualan from '../views/penjualan.vue';
import Pengeluaran from '../views/pengeluaran.vue';
import Laporan from '../views/laporan.vue';

const routes = [
  // 1. Halaman login
  { path: '/login', component: Login },

  // 2. Setelah login, baru bisa ke dashboard dkk.
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/penjualan', component: Penjualan },
  { path: '/pengeluaran', component: Pengeluaran },
  { path: '/laporan', component: Laporan },

  // 3. Kalau user masuk url random, arahkan ke login
  { path: '/:catchAll(.*)', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// navigation guard sederhana
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  if (authRequired && !isLoggedIn) {
    // belum login, paksa ke login page
    return next('/login');
  }
  if (to.path === '/login' && isLoggedIn) {
    // sudah login tapi ke /login lagi? langsung ke dashboard
    return next('/dashboard');
  }
  next();
});

export default router;
