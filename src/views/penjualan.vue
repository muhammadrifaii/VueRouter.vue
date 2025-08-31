import axios from 'axios';

<template>
  <div class="kelola-transaksi">
    <!-- Notifikasi -->
    <div v-if="showSuccess" class="success-message">
      ✅ Transaksi berhasil disimpan
    </div> 

    <!-- Info Shift -->
    <div class="shift-info">
      <div>
        <h2 @click="lihatDetailShift">🕒 Shift Pagi (08.00–15.00)</h2>
        <p>Dibuka oleh <strong>Owner</strong> | 22/06/2025 02:08 | Kas: <strong>Rp 124.000</strong></p>
      </div>
      <button @click="tutupShift">🔒 Tutup Shift</button>
    </div>

    <!-- Tombol Aksi -->
    <div class="action-buttons">
      <button class="btn-transaksi" @click="buatTransaksi">➕ Transaksi Baru</button>
      <button class="btn-fund" @click="tambahDana">💰 Add Fund</button>
      <button class="btn-refund" @click="prosesRefund">↩️ Refund</button>
      <button class="btn-xreport" @click="cetakXReport">📄 X Report</button>
      <button class="btn-zreport" @click="cetakZReport">📊 Z Report</button>
    </div>

    <!-- Daftar Transaksi -->
    <div class="table-container">
      <div class="table-header">📋 Daftar Transaksi</div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Kode</th>
            <th>Tanggal</th>
            <th>Shift</th>
            <th>Total</th>
            <th>Diskon</th>
            <th>Metode</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(trx, index) in transaksi" :key="trx.kode">
            <td>{{ index + 1 }}</td>
            <td>{{ trx.kode }}</td>
            <td>{{ trx.tanggal }}</td>
            <td><span class="badge shift">{{ trx.shift }}</span></td>
            <td>{{ trx.total }}</td>
            <td>{{ trx.diskon }}</td>
            <td><span class="badge cash">{{ trx.metode }}</span></td>
            <td><span class="badge status">{{ trx.status }}</span></td>
            <td>
              <div class="action-icons">
                <button class="view" @click="lihatDetail(trx)">👁️</button>
                <button class="edit" @click="editTransaksi(trx)">✏️</button>
                <button class="delete" @click="hapusTransaksi(trx)">🗑️</button>
              </div>
            </td>
          </tr>
          <tr v-if="transaksi.length === 0">
            <td colspan="9" style="text-align: center; color: #6b7280;">Tidak ada transaksi</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'KelolaTransaksi',
  data() {
    return {
      showSuccess: false,
      transaksi: []
    };
  },
  mounted() {
    this.ambilDataTransaksi();
  },
  methods: {
    // Ambil data dari server saat halaman dibuka
    async ambilDataTransaksi() {
      try {
        const response = await axios.get('http://localhost:3000/transaksi');
        this.transaksi = response.data;
      } catch (error) {
        console.error('Gagal ambil data transaksi:', error);
      }
    },

    // Tambah transaksi baru ke server
    async buatTransaksi() {
      const newTrx = {
        kode: 'TRX-' + Date.now(),
        tanggal: new Date().toLocaleString('id-ID'),
        shift: 'Pagi',
        total: 'Rp 74.000',
        diskon: 'Rp 2.000',
        metode: 'CASH',
        status: 'Open'
      };

      try {
        const response = await axios.post('http://localhost:3000/transaksi', newTrx);
        this.transaksi.push(response.data);
        this.showSuccess = true;

        // Sembunyikan notifikasi setelah 3 detik
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
      } catch (error) {
        console.error('Gagal menyimpan transaksi:', error);
      }
    },

    // Hapus transaksi dari server
    async hapusTransaksi(trx) {
      if (confirm(`Hapus transaksi ${trx.kode}?`)) {
        try {
          await axios.delete(`http://localhost:3000/transaksi/${trx.id}`);
          this.transaksi = this.transaksi.filter(t => t.id !== trx.id);
        } catch (error) {
          console.error('Gagal menghapus transaksi:', error);
        }
      }
    },

    // Aksi tombol lain (sementara alert)
    tambahDana() {
      alert('Add Fund diklik');
    },
    prosesRefund() {
      alert('Refund diklik');
    },
    cetakXReport() {
      alert('X Report dicetak');
    },
    cetakZReport() {
      alert('Z Report dicetak');
    },
    tutupShift() {
      alert('Shift ditutup');
    },
    lihatDetailShift() {
      alert('Detail Shift diklik');
    },
    lihatDetail(trx) {
      alert(`Lihat detail transaksi: ${trx.kode}`);
    },
    editTransaksi(trx) {
      alert(`Edit transaksi: ${trx.kode}`);
    }
  }
};
</script>


<style scoped>
/* CSS sama seperti sebelumnya */
.kelola-transaksi {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fafb;
  padding: 24px;
}

.success-message {
  background-color: #d1fae5;
  border: 1px solid #10b981;
  color: #065f46;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
}

.shift-info {
  display: flex;
  justify-content: space-between;
  background-color: #eff6ff;
  border: 1px solid #93c5fd;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
}

.shift-info h2 {
  color: #2563eb;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.shift-info p {
  font-size: 13px;
  color: #4b5563;
  margin-top: 4px;
}

.shift-info button {
  background-color: #ef4444;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}

.shift-info button:hover {
  background-color: #dc2626;
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.action-buttons button {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.btn-transaksi { background-color: #3b82f6; color: white; }
.btn-fund { background-color: #facc15; color: white; }
.btn-refund { background-color: #f87171; color: white; }
.btn-xreport { background-color: #22d3ee; color: white; }
.btn-zreport { background-color: white; border: 1px solid #ccc; }

.action-buttons button:hover {
  opacity: 0.9;
}

.table-container {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: white;
  overflow-x: auto;
}

.table-header {
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: bold;
  color: #1d4ed8;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

th, td {
  padding: 10px;
  border: 1px solid #e5e7eb;
  text-align: left;
}

.badge {
  display: inline-block;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 4px;
  font-weight: 500;
}

.badge.shift {
  background-color: #bfdbfe;
  color: #1e3a8a;
}

.badge.cash {
  background-color: #bbf7d0;
  color: #065f46;
}

.badge.status {
  background-color: #fde68a;
  color: #92400e;
}

.action-icons {
  display: flex;
  gap: 4px;
}

.action-icons button {
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.action-icons .view { background-color: #60a5fa; }
.action-icons .edit { background-color: #fbbf24; }
.action-icons .delete { background-color: #ef4444; }

.action-icons button:hover {
  opacity: 0.85;
}
</style>
