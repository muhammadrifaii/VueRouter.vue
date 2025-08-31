<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-header">
        <i class="fas fa-coffee cafe-icon"></i>
        <h2>Welcome to Caffe Box</h2>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit" class="btn-login">
          <i class="fas fa-sign-in-alt"></i> Login
        </button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

async function login() {
  errorMessage.value = ''       // reset pesan error
  try {
    // Fetch user yang email+password-nya sama
    const res = await axios.get('http://localhost:3000/users', {
      params: {
        email: email.value,
        password: password.value
      }
    })

    if (res.data.length > 0) {
      // login sukses
      localStorage.setItem('loggedIn', 'true')
      router.push('/dashboard')
    } else {
      // tidak ada user yang cocok
      errorMessage.value = 'Email atau password tidak ditemukan!'
    }
  } catch (err) {
    console.error(err)
    errorMessage.value = 'Gagal terhubung ke server'
  }
}
</script>


<style scoped>
/* Latar sederhana dengan gradient */
.login-page {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Kotak login putih */
.login-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 380px;
}

/* Header biru + ikon kopi */
.login-header {
  background-color: #2563eb;
  color: white;
  border-radius: 8px 8px 0 0;
  padding: 1rem;
  text-align: center;
  margin: -2rem -2rem 1.5rem -2rem;
}

.cafe-icon {
  font-size: 2rem;
}

/* Title di bawah ikon */
.login-header h2 {
  margin: 0.5rem 0 0;
  font-weight: 500;
}

/* Form */
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 1rem;
}

/* Tombol login full-width */
.btn-login {
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.btn-login:hover {
  background-color: #1d4ed8;
}

/* Pesan error */
.error {
  color: #dc2626;
  text-align: center;
  margin-top: 1rem;
}
</style>
