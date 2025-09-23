<script setup>
import Logo from '../components/Logo.vue';
import LoginForm from '../components/LoginForm.vue';
import ErrorMessage from '../components/ErrorMessage.vue'
import { useAuth } from '../composables/useAuth'

const { login, error } = useAuth()

function handleLogin({ email, password }) {
  login(email, password)
}
</script>

<template>
  <div class="login-bg">
    <div class="login-card">
      <Logo />
      <LoginForm @login="handleLogin" />
      <ErrorMessage v-if="error" :message="error" />
    </div>
  </div>
</template>

<style>
.login-bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--login-bg);
  transition: background-color 0.3s ease;
  padding: 1rem;
}

.login-card {
  background: var(--login-card-bg);
  color: var(--login-card-text);
  padding: 2.5rem;
  border: 1px solid var(--card-border);
  border-radius: 8px;
  box-shadow: 0 4px 16px var(--card-shadow);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  transition: all 0.3s ease;
}

.login-card > * {
  width: 100%;
}

.ErrorMessage {
  margin-top: 1rem;
}
</style>