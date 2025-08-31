<template>
  <div class="pengeluaran">
    <h1>Data Pengeluaran</h1>

    <form @submit.prevent="tambahPengeluaran">
      <input v-model="form.keterangan" placeholder="Keterangan" required />
      <input v-model="form.jumlah" type="number" placeholder="Jumlah (Rp)" required />
      <button type="submit">Tambah</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Keterangan</th>
          <th>Jumlah</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in pengeluaran" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.keterangan }}</td>
          <td>Rp {{ item.jumlah }}</td>
          <td><button @click="hapus(item.id)">🗑️</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Pengeluaran',
  data() {
    return {
      form: {
        keterangan: '',
        jumlah: ''
      },
      pengeluaran: []
    };
  },
  methods: {
    async getData() {
      const res = await axios.get('http://localhost:3000/pengeluaran');
      this.pengeluaran = res.data;
    },
    async tambahPengeluaran() {
      const res = await axios.post('http://localhost:3000/pengeluaran', this.form);
      this.pengeluaran.push(res.data);
      this.form.keterangan = '';
      this.form.jumlah = '';
    },
    async hapus(id) {
      await axios.delete(`http://localhost:3000/pengeluaran/${id}`);
      this.pengeluaran = this.pengeluaran.filter(p => p.id !== id);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
.pengeluaran {
  padding: 20px;
  background-color: #f0fdf4;
}
form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
td, th {
  padding: 8px;
  border: 1px solid #ccc;
}
</style>
