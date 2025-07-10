<template>
  <div class="laporan">
    <h1>Laporan Keuangan</h1>

    <h3>Total Transaksi: Rp {{ totalTransaksi }}</h3>
    <h3>Total Pengeluaran: Rp {{ totalPengeluaran }}</h3>
    <h3>Keuntungan Bersih: Rp {{ totalTransaksi - totalPengeluaran }}</h3>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Laporan',
  data() {
    return {
      transaksi: [],
      pengeluaran: []
    };
  },
  computed: {
    totalTransaksi() {
      return this.transaksi.reduce((acc, t) => acc + this.parseRupiah(t.total), 0);
    },
    totalPengeluaran() {
      return this.pengeluaran.reduce((acc, p) => acc + Number(p.jumlah), 0);
    }
  },
  methods: {
    parseRupiah(rp) {
      return Number(rp.replace(/[^\d]/g, ''));
    },
    async getData() {
      const trx = await axios.get('http://localhost:3000/transaksi');
      const peng = await axios.get('http://localhost:3000/pengeluaran');
      this.transaksi = trx.data;
      this.pengeluaran = peng.data;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
.laporan {
  padding: 20px;
  background-color: #ecfdf5;
}
h3 {
  margin: 8px 0;
}
</style>
