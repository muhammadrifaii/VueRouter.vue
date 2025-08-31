<template>
  <div class="dashboard">
    <h1 class="title">Dashboard Keuangan</h1>
    <div class="date-container">
      <input type="date" v-model="selectedDate" class="date-input" />
    </div>

    <!-- Statistik Cepat -->
    <section class="statistik">
      <h2 class="section-title">Statistik Cepat</h2>
      <div class="stat-grid">
        <div class="stat-box">
          <p class="stat-label">TRANSAKSI</p>
          <p class="stat-value">{{ formatAngka(125) }}</p>
        </div>
        <div class="stat-box">
          <p class="stat-label">PENDAPATAN</p>
          <p class="stat-value">{{ formatRupiah(5000000) }}</p>
        </div>
      </div>
    </section>

    <!-- Metode Pembayaran -->
    <section class="pembayaran">
      <h2 class="section-title">Metode Pembayaran</h2>
      <ul class="pembayaran-list">
        <li><span class="dot blue"></span> Cash</li>
        <li><span class="dot green"></span> Card</li>
        <li><span class="dot cyan"></span> QRIS</li>
      </ul>
      <p class="note">(Simulasi grafik bisa ditambahkan)</p>
    </section>

    <!-- Ringkasan Keuangan -->
    <section class="ringkasan">
      <h2 class="section-title">Ringkasan Keuangan Hari Ini</h2>
      <table class="summary-table">
        <thead>
          <tr>
            <th>Komponen</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Modal Awal Shift</td>
            <td>{{ formatRupiah(0) }}</td>
          </tr>
          <tr>
            <td>Total Add Fund</td>
            <td class="plus">+ {{ formatRupiah(0) }}</td>
          </tr>
          <tr>
            <td>Total Refund</td>
            <td class="minus">- {{ formatRupiah(0) }}</td>
          </tr>
          <tr>
            <td>Total Transaksi Cash</td>
            <td>{{ formatRupiah(0) }}</td>
          </tr>
          <tr class="highlight">
            <td>Total Kas Harian</td>
            <td>{{ formatRupiah(0) }}</td>
          </tr>
          <tr>
            <td>Total Transaksi Non-Cash</td>
            <td>{{ formatRupiah(0) }}</td>
          </tr>
          <tr class="highlight-green">
            <td>Total Pendapatan Harian</td>
            <td>{{ formatRupiah(4000000) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
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
  methods: {
    formatRupiah(angka) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(angka);
    },
    formatAngka(angka) {
      return new Intl.NumberFormat('id-ID').format(angka);
    }
  }
};
</script>

<style scoped>
.dashboard {
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  background: #f9fafb;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.date-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.date-input {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.section-title {
  font-size: 1.25rem;
  margin: 1rem 0 0.5rem;
  color: #1e3a8a;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-box {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

.stat-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: #111827;
  margin-top: 0.25rem;
}

.pembayaran-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.pembayaran-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.blue { background-color: #2563eb; }
.green { background-color: #16a34a; }
.cyan { background-color: #06b6d4; }

.note {
  font-size: 0.85rem;
  font-style: italic;
  color: #555;
  margin-top: 0.5rem;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 0 6px rgba(0,0,0,0.05);
  border-radius: 8px;
  overflow: hidden;
}

.summary-table th,
.summary-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
}

.summary-table th {
  background: #f3f4f6;
  font-weight: 600;
  text-align: left;
}

.highlight {
  background-color: #f9fafb;
  font-weight: bold;
}

.highlight-green {
  background-color: #dcfce7;
  font-weight: bold;
}

.plus {
  color: #16a34a;
}

.minus {
  color: #dc2626;
}

/* Responsive */
@media (max-width: 640px) {
  .stat-grid {
    grid-template-columns: 1fr;
  }

  .summary-table th, .summary-table td {
    font-size: 0.9rem;
  }
}
</style>
