<template>
    <button :disabled="loading">
        <span v-if="loading">Loading...</span>
        <span v-else><slot /></span>
    </button>
</template>

<script setup>
defineProps({ loading: Boolean });
</script>

<style scoped>
button {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px var(--button-primary-shadow);
}

button:hover:not(:disabled) {
  background: var(--button-primary-hover);
  box-shadow: 0 4px 8px var(--button-primary-shadow-hover);
  transform: translateY(-1px);
}

button:active:not(:disabled) {
  transform: translateY(0);
}

button:disabled {
  background: var(--text-muted);
  color: var(--button-primary-text);
  cursor: not-allowed;
  opacity: 0.6;
  transform: none;
  box-shadow: none;
}
</style>