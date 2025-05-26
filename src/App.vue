<template>
  <div class="app-container">


 <aside class="sidebar">
    <h2 class="">Caffe Box</h2>
    <router-link to="/" class="nav-link" exact>Dashboard</router-link>
    <router-link to="/penjualan" class="nav-link" >penjualan</router-link>
    <router-link to="/pengeluaran" class="nav-link" >Pengeluaran</router-link>
    <router-link to="/laporan" class="nav-link" >Laporan</router-link>

  </aside>

<main class="main-content">
<routerView />

</main>
    
  </div>
</template>


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
  width: 220px;
  background-color: #1e293b;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.logo {
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

.main-content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
  background-color: #f3f4f6;
  box-sizing: border-box;
}
</style>
