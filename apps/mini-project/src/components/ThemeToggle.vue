<template>
  <button class="theme-btn" @click="toggleTheme">
    <span class="icon">
      <img v-if="dark" width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/do-not-disturb-2.png" alt="do-not-disturb-2"/>
      <img v-else width="20" height="20" src="https://img.icons8.com/external-linear-outline-icons-papa-vector/78/external-Light-Mode-interface-linear-outline-icons-papa-vector.png" alt="external-Light-Mode-interface-linear-outline-icons-papa-vector"/>
    </span>
  </button>
    <span class="mode-label">{{ dark ? 'Dark Mode' : 'Light Mode' }}</span>
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
  width: 10%;
  border: none;
  border-radius: 8px;
  background: #c7a6a6;
  color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  gap: 2px;
}
.theme-btn:hover {
  background: #3f3f3f;
  color: #fff;
}
.theme-btn:active {
  background: #19191a;
}
.icon {
  pointer-events: none;
}
.mode-label {
  font-size: 0.75rem;
  margin-top: 2px;
  color: inherit;
  font-weight: 500;
  letter-spacing: 0.02em;
}
</style>