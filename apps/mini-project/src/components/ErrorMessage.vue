<template>
  <div v-if="message" class="error">{{ message }}</div>
</template>
<script setup>
defineProps(['message'])
</script>
<style scoped>
.error {
  color: var(--error-color);
  background: var(--error-bg);
  border: 1px solid var(--error-border);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  font-size: 0.925rem;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  transition: all 0.3s ease;
}
</style>