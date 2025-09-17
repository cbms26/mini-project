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
  max-width: 320px;
  padding: 2rem;
  border-radius: 8px;
  background: var(--login-card-bg);
  color: var(--login-card-text);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-form input[type="email"],
.login-form input[type="password"] {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.login-form input[type="email"]:focus,
.login-form input[type="password"]:focus {
  outline: none;
  border-color: var(--focus, #3b82f6);
}

.login-form .remember {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
}

.login-form .remember input {
  margin-right: 0.5rem;
  accent-color: #3b82f6;
}

.login-form button {
  width: 100%;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.login-form button:hover {
  background: #2563eb;
}
</style>
