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
  background: #f3f4f6;
}

.login-card {
  background: #fff;
  color: #222;
  padding: 2.2rem 2.2rem 1.7rem 2.2rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
  font-family: 'Segoe UI', 'Arial', sans-serif;
}




.login-card > * {
  width: 100%;
}

.ErrorMessage {
  margin-top: 0.5rem;
}
</style>