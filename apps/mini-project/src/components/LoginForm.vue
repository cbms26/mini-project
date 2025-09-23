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
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: var(--card-text);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: 'Segoe UI', 'Arial', sans-serif;
}

.login-form input[type="email"],
.login-form input[type="password"] {
  padding: 0.875rem 1rem;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  font-size: 1rem;
  background: var(--input-bg);
  color: var(--input-text);
  transition: all 0.2s ease;
  font-family: inherit;
}

.login-form input[type="email"]:focus,
.login-form input[type="password"]:focus {
  outline: none;
  border-color: var(--input-border-focus);
  background: var(--card-bg);
  box-shadow: 0 0 0 3px var(--input-shadow-focus);
}

.login-form label.remember {
  display: flex;
  align-items: center;
  font-size: 0.975rem;
  color: var(--text-secondary);
  user-select: none;
  margin: 0.25rem 0;
}

.login-form .remember input {
  margin-right: 0.75rem;
  accent-color: var(--input-border-focus);
  transform: scale(1.1);
}

.login-form button {
  width: 100%;
  padding: 0.875rem;
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  border: none;
  border-radius: 6px;
  font-size: 1.075rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px var(--button-primary-shadow);
  font-family: inherit;
  margin-top: 0.5rem;
}

.login-form button:hover,
.login-form button:focus {
  background: var(--button-primary-hover);
  box-shadow: 0 4px 8px var(--button-primary-shadow-hover);
  transform: translateY(-1px);
}

.login-form button:active {
  transform: translateY(0);
}

.login-form input::placeholder {
  color: var(--input-placeholder);
  opacity: 1;
}
</style>
