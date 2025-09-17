<template>
  <button @click="toggleTheme">
    {{ dark ? '🌙 Dark' : '☀️ Light' }}
  </button>
</template>

<script setup>
import { ref } from 'vue'
const dark = ref(false)
function toggleTheme() {
  dark.value = !dark.value
  document.body.style.background = dark.value ? '#222' : '#f0f4f8'
}
</script>