<template>
  <div class="app-container">
    <aside v-if="showSidebar" class="sidebar">
      <h2>Caffe Box</h2>
      <router-link to="/dashboard" class="nav-link" exact>Dashboard</router-link>
      <router-link to="/penjualan" class="nav-link">Kelolah Transaksi</router-link>
      <router-link to="/pengeluaran" class="nav-link">Pengeluaran</router-link>
      <router-link to="/laporan" class="nav-link">Laporan</router-link>
      <!-- Tombol logout di pojok kiri bawah -->
      <button class="btn-logout" @click="logout">
        <i class="fas fa-sign-out-alt"></i>
        Logout
      </button>
    </aside>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const showSidebar = computed(() => route.path !== '/login')

function logout() {
  localStorage.removeItem('loggedIn')
  router.push('/login')
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  position: relative; /* untuk positioning tombol logout */
  width: 220px;
  background-color: #1e293b;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.sidebar h2 {
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
}

.nav-link {
  text-decoration: none;
  color: white;
  padding: 12px 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  transition: background 0.3s;
}

.nav-link.router-link-exact-active,
.nav-link:hover {
  background-color: #334155;
}

/* Styling tombol logout kecil di bawah */
.btn-logout {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: transparent;
  border: none;
  color: #f87171; /* merah lembut */
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-logout:hover {
  color: #f05545;
}

.main-content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
  background-color: #f3f4f6;
  box-sizing: border-box;
}
</style>
