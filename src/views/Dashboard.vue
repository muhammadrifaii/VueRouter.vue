<template>
  <div class="dashboard">
    <h1>Dashboard Keuangan</h1>
    <input type="date" v-model="selectedDate" class="tanggal" />
    
    <div class="stats">
      <div class="card">
        <h3>Total Pesanan</h3>
        <p class="value">125</p>
        <p class="desc">Pesanan Terbaru</p>
      </div>
      <div class="card">
        <h3>Pendapatan Kotor</h3>
        <p class="value">Rp 5.000.000</p>
        <p class="desc">Total Penjualan</p>
      </div>
      <div class="card">
        <h3>Pendapatan Bersih</h3>
        <p class="value">Rp 4.500.000</p>
        <p class="desc">Setelah Pengeluaran</p>
      </div>
      <div class="card">
        <h3>Pengeluaran</h3>
        <p class="value">Rp 500.000</p>
        <p class="desc">Total Pengeluaran</p>
      </div>
      <div class="card">
        <h3>Laba Bersih</h3>
        <p class="value">Rp 4.000.000</p>
        <p class="desc">Keuntungan Kafe</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      selectedDate: new Date().toISOString().substring(0, 10),
    };
  },
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
.tanggal {
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 4px;
}
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.card {
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
}
.value {
  font-size: 1.5em;
  font-weight: bold;
}
.desc {
  color: gray;
  font-size: 0.9em;
}
</style>
