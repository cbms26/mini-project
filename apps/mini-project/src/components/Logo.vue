<script setup>
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
    <div class="logo-section">
      <h1 class="logo-heading">Megaport Portal</h1>
      <p class="login-subtitle">Login to your Account</p>
      <div class="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
    </div>
</template>

<style>
.logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
    width: 100%;
}

.logo-heading {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--card-text);
  letter-spacing: -0.02em;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  transition: color 0.3s ease;
}

.login-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin: 0 0 1.5rem 0;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  transition: color 0.3s ease;
  font-weight: 400;
}

.theme-toggle-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
</style>