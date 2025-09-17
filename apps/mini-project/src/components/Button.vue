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
  background: #2196f3;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
button:disabled {
  background: #90caf9;
  cursor: not-allowed;
}
</style>