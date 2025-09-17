<template>
  <nav class="topnav">
    <div class="logo">
      <h1>Megaport Portal</h1>
    </div>
    <div class="user-info">
      <span v-if="user">{{ user }}</span>
      <ThemeToggle />
      <button v-if="loggedIn" @click="logout" class="logout-btn">Logout</button>
    </div>
  </nav>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
const props = defineProps({ loggedIn: Boolean, user: String })
const emit = defineEmits(['logout'])
function logout() {
  emit('logout')
}
</script>

<style scoped>
.topnav {
  background: var(--topnav-bg);
  color: var(--topnav-text);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo h1 {
  margin: 0;
  font-size: 1.5rem;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.logout-btn {
  background: var(--button-bg);
  color: var(--button-text);
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>