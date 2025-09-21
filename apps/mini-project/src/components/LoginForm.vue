<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

const email = ref('');
const password = ref('');
const remember = ref(false);
const loading = ref(false);

const emit = defineEmits(['login']);

function submit() {
    loading.value = true;
    setTimeout(() => {
        emit('login', { email: email.value, password: password.value })
        loading.value = false;
    }, 500);
}
</script>

<template>
  <form @submit.prevent="submit" class="login-form">
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <label class="remember">
      <input type="checkbox" v-model="remember" />
      Remember me
    </label>
    <Button :loading="loading" type="submit">Login</Button>
  </form>
</template>

<style>
.login-form {
  max-width: 340px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  color: #222;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-family: 'Segoe UI', 'Arial', sans-serif;
}

.login-form input[type="email"],
.login-form input[type="password"] {
  padding: 0.7rem 0.9rem;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  font-size: 1rem;
  background: #f9fafb;
  color: #222;
  transition: border-color 0.2s;
}

.login-form input[type="email"]:focus,
.login-form input[type="password"]:focus {
  outline: none;
  border-color: #2563eb;
  background: #fff;
}

.login-form label.remember {
  display: flex;
  align-items: center;
  font-size: 0.97rem;
  color: #444;
  user-select: none;
}

.login-form .remember input {
  margin-right: 0.5rem;
  accent-color: #2563eb;
}

.login-form button {
  width: 100%;
  padding: 0.85rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 1.07rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
}

.login-form button:hover,
.login-form button:focus {
  background: #1746a2;
}

.login-form input::placeholder {
  color: #888;
  opacity: 1;
}
</style>
