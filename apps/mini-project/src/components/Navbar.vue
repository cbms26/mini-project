<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
      <li><NuxtLink to="/profile">Profile</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup>
// No extra logic needed for basic navigation
</script>

<style scoped>
nav {
  background: #333;
  color: #fff;
  padding: 1rem;
}
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
a, .router-link-active {
  color: #fff;
  text-decoration: none;
}
</style>