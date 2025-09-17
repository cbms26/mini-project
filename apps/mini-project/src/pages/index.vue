<script setup>


import Logo from '../components/Logo.vue';
import LoginForm from '../components/LoginForm.vue';
import ThemeToggle from '../components/ThemeToggle.vue'
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
      <ThemeToggle />
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
  background: #f0f4f8; 
}
.login-card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.1);
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>