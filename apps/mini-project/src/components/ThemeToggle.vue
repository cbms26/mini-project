<template>
  <button class="theme-btn" @click="toggleTheme">
    <span class="icon">
      <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" stroke-width="1.5"/>
      </svg>
      <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69965 9.92157 2.5C5.66274 3.49698 2.5 7.27699 2.5 11.8731C2.5 17.4334 6.94668 21.8801 12.5069 21.8801C17.103 21.8801 20.883 18.7174 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5"/>
      </svg>
    </span>
    <span class="mode-label">{{ isDark ? 'Dark Mode' : 'Light Mode' }}</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
  applyTheme()
})

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function applyTheme() {
  if (isDark.value) {
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
  }
}
</script>

<style scoped>
.theme-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--toggle-border);
  border-radius: 6px;
  background: var(--toggle-bg);
  color: var(--toggle-text);
  font-size: 0.925rem;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px var(--card-shadow);
  outline: none;
  font-weight: 500;
}

.theme-btn:hover,
.theme-btn:focus {
  background: var(--toggle-hover-bg);
  border-color: var(--toggle-hover-border);
  color: var(--toggle-hover-text);
  transform: translateY(-1px);
  box-shadow: 0 2px 6px var(--card-shadow);
}

.icon {
  display: flex;
  align-items: center;
  pointer-events: none;
  color: inherit;
}

.mode-label {
  font-size: 0.925rem;
  color: inherit;
  font-weight: 500;
  letter-spacing: 0.01em;
}
</style>