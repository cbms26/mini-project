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
  background: var(--button-bg);
  color: var(--button-text);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
button:disabled {
  background: #90caf9;
  color: var(--button-text);
  cursor: not-allowed;
}
</style>