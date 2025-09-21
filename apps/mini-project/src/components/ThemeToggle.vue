<template>
  <button class="theme-btn" @click="toggleTheme">
    <span class="icon">
      <img v-if="dark" width="18" height="18" src="https://img.icons8.com/ios-glyphs/30/do-not-disturb-2.png" alt="Dark Mode" />
      <img v-else width="18" height="18" src="https://img.icons8.com/external-linear-outline-icons-papa-vector/78/external-Light-Mode-interface-linear-outline-icons-papa-vector.png" alt="Light Mode" />
    </span>
    <span class="mode-label">{{ dark ? 'Dark Mode' : 'Light Mode' }}</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
const dark = ref(false)
function toggleTheme() {
  dark.value = !dark.value
  document.body.classList.toggle('dark-mode', dark.value)
}
</script>

<style scoped>
.theme-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: #f9fafb;
  color: #222;
  font-size: 1rem;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  outline: none;
}
.theme-btn:hover,
.theme-btn:focus {
  background: #e5e7eb;
  border-color: #2563eb;
  color: #1746a2;
}
.icon {
  display: flex;
  align-items: center;
  pointer-events: none;
}
.mode-label {
  font-size: 0.97rem;
  color: #222;
  font-weight: 500;
  letter-spacing: 0.01em;
}
</style>